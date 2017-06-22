import React, {Component} from "react";
import {Menu, Tree,Button} from "antd";
import dispatchActions from "../../actions/index";
import CreateNewControl from "./CreateNewControlModal";
import RenameModal from './RenameModal';
const { SubMenu } = Menu;
const TreeNode = Tree.TreeNode;


var {connect} = require('react-redux');

class ComponentTreeView extends Component
{
  constructor(props)
  {
    super(props)
    this.state ={
      menuItemIdentifier:undefined,
      showModal:false,
    }
    this._selectNode = this._selectNode.bind(this)
    this._onRightClick = this._onRightClick.bind(this)
    this._onMenuClick = this._onMenuClick.bind(this)
    // this._unSelectMenu = this._unSelectMenu.bind(this)
  }


  render() {
    let {componentConfig} = this.props
    return (
      <div>
        <CreateNewControl
          handleCancel={()=>this.setState({showModal:false})}
          parentIdentifier = {this.state.parentIdentifier}
          handleOk={()=>this.setState({showModal:false})}
          visible={this.state.showModal}/>
        <RenameModal/>
        <Button type="primary" onClick={()=>{this.props.add()}}>添加磁贴</Button>
        <Tree
          // className="draggable-tree"
          // defaultExpandedKeys={this.state.expandedKeys}
          // draggable
          // onDragEnter={this.onDragEnter}
          // onDrop={this.onDrop}
          defaultExpandAll={true}
          onSelect={this._selectNode}
          onRightClick={this._onRightClick}
        >
          {this._renderTree(componentConfig)}
        </Tree>
      </div>

    );
  }

  _renderTree(componentConfig) {
    return (componentConfig.map((section,key)=>{
      return(
          <TreeNode key={section.identifier} title={
            <span style={{display:'flex',flexDirection:"row",alignItems:'center'}}>
              {section.componentName}
              {this._renderMenu(section.name,section.identifier)}
            </span>
          }>
            {this._renderNode(section.children[0])}
          </TreeNode>)
    }));
  }

  _renderNode(object)
  {
    if(object === undefined)
    {
      return null
    }
    return (
        <TreeNode key={object.identifier} title={
          <span style={{display:'flex',flexDirection:"row",alignItems:'center'}}>
              {object.name}
            {this._renderMenu(object.name,object.identifier)}
            </span>
        }>
          {object.children.map((section,key)=>{
            return this._renderNode(section);
          })}
        </TreeNode>
    );
  }

  _renderMenu(name,identifier)
  {
    let items = [];

      items.push(
        <Menu.Item key='delete'>
          <p>删除</p>
        </Menu.Item>
      )
    if(name === 'View' || name === 'TouchableOpacity')
    {
      items.push(
        <Menu.Item key='add'>
          <p>添加</p>
        </Menu.Item>
      )
    }
    if(name === 'Container')
    {
      items.push(
          <Menu.Item key='rename'>
            <p>重命名</p>
          </Menu.Item>
      )
    }
    if(items.length === 0)
    {
      return null;
    }
      return (
        <Menu onClick={(e)=> this._onMenuClick(e,identifier)}  style={{backgroundColor:"#fff0"}}>
          <SubMenu key="sub1" title={""}>
            {items}
          </SubMenu>
        </Menu>
      )
  }

  _onMenuClick(e,identifier)
  {
    console.log('click', e);
    if(e.key === 'delete')
    {
      this.props.delete(identifier);
    }
    else if(e.key === 'add'){
      this.setState({
        showModal:!this.state.showModal,
        parentIdentifier:identifier
      })
    }else if(e.key==='rename'){
      this.props.update({renameModalVisible:true});
      this.props.beginRename(identifier);
    }
    e.domEvent.stopPropagation();//停止点击事件冒泡
  }

  _onRightClick(e)
  {

  }
  _selectNode(selectedKeys,e)
  {

    let key = selectedKeys[0]
    if(key === undefined)
    {
      return;
    }
    this.props.select(key);
  }
}

function mapStateToProps(state) {
  return {
    componentConfig: state.componentEditorData.componentConfig
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      dispatch({
        type:"EDITOR_ADD_COMPONENT_CONTAINER",
        componentName:_getTimeStamp(),
        randomNumber:_getTimeStamp()
      });
    },
    select:(identifier)=>{dispatch({type:'EDITOR_SELECT_CONTROL',payload:{identifier:identifier}})},
    delete:(identifier)=>{dispatch({type:'EDITOR_REMOVE_COMPONENT',payload:{identifier:identifier}})},
    beginRename:(identifier)=>{dispatch({type:'EDITOR_BEGIN_RENAME',identifier:identifier})},
    update: (data) => {
      dispatch({type:"UPDATE_SCREEN",data:data});
    },
  }
}
function _getTimeStamp()
{
  let timestamp = (new Date()).valueOf();
  return ''+timestamp;
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(ComponentTreeView);
