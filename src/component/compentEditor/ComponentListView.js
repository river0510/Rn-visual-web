/**
 * Created by luohaoxin on 2017/5/15.
 */
import React, {Component} from "react";
import {Menu, Tree} from "antd";
import CreateNewControl from "./CreateNewControlModal";
import RenameModal from "./RenameModal";
import standardComponent from '../../config/standardComponent';
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
                    handleCancel={()=>this.setState({showModal: false})}
                    parentIdentifier={this.state.parentIdentifier}
                    handleOk={()=>this.setState({showModal: false})}
                    visible={this.state.showModal}/>
                <RenameModal/>
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
                    <TreeNode key={"0"} title={
                        <span style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                        {"标准磁贴"}
                        </span>
                    }>
                        {this._renderStandardNode()}
                    </TreeNode>
                    <TreeNode key={"1"} title={
                        <span style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                        {"自定义磁贴"}
                        </span>
                    }>
                        {this._renderNode()}
                    </TreeNode>
                </Tree>
            </div>

        );
    }
    _renderStandardNode()
    {
        var list=[];
        for(let key in standardComponent){
            let section=standardComponent[key];
            list.push((
                <TreeNode key={key} title={
                    <span style={{display:'flex',flexDirection:"row",alignItems:'center'}}>
                        {key}
                        {this._renderMenu(key)}
                    </span>
                }>
                </TreeNode>))
        }
        return list
    }
    _renderNode()
    {
        return (this.props.componentConfig.map((section,key)=>{
            return(
                <TreeNode key={section.identifier} title={
                    <span style={{display:'flex',flexDirection:"row",alignItems:'center'}}>
                        {section.componentName}
                        {this._renderMenu(section.componentName)}
            </span>
                }>
                </TreeNode>)
        }));
    }

    _renderMenu(data)
    {
        let items = [];
        items.push(
            <Menu.Item key='add' >
                <p>添加到页面</p> 
            </Menu.Item>
        )
        return (
            <Menu onClick={(e)=> this._onMenuClick(e,data)}  style={{backgroundColor:"#fff"}}>
                <SubMenu key="sub1" title={""}>
                    {items}
                </SubMenu>
            </Menu>
        )
    }

    _onMenuClick(e,data)
    {
        console.log('click', e);
        this.props.add(data);
        e.domEvent.stopPropagation();//停止点击事件冒泡
    }

    _onRightClick(e)
    {
    }
    _selectNode(selectedKeys,e)
    {
    }
}

function mapStateToProps(state) {
    return {
        componentConfig: state.componentEditorData.componentConfig
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (data) => {
            dispatch({
                type:"SCREEN_ADD_COMPONENT",
                name:data,
            });
        },
    }
}
function _getTimeStamp()
{
    let timestamp = (new Date()).valueOf();
    return ''+timestamp;
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(ComponentTreeView);
