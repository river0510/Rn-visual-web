import React,{
  Component
} from 'react'
import { Modal, Button, Menu, Dropdown, Icon,Input} from 'antd';
import SetOfControl from '../../config/index'
import TextObject from '../../config/text'
import ImageObject from '../../config/image'
import ViewObject from '../../config/view'
import TouchableObject from '../../config/touchableOpacity'
import dataType from '../../config/dataType'
import dispatchActions from '../../actions/index'
var {connect} = require('react-redux');

class BindComponentPropertyModal extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      selectProperty:undefined,
      propertyName:''
    }
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleMenuClick  = this.handleMenuClick.bind(this)
  }

  handleOk()
  {
    if(!this.state.propertyName||this.state.propertyName.length === 0)
    {
      return
    }
    let {dispatch} = this.props
    dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_ADD_EXTRACT',{propertyName:this.state.selectProperty,extractkey:this.state.propertyName});
    // let control = this._newControl(SetOfControl[this.state.selectedControl],this.state.selectedControl)
    // let  {dispatch} = this.props
    // dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_ADD_COMPONENT',{
    //   parentIdentifier:this.props.parentIdentifier,
    //   component:control});
    if(this.props.handleOk)
    {
      this.props.handleOk()
    }
  }

  handleCancel()
  {
    if(this.props.handleCancel)
    {
      this.props.handleCancel()
    }
  }

  handleMenuClick(e)
  {
    this.setState({selectProperty:e.key})
  }

  render()
  {
    let properties = this._getState();
    let menuItems = []
    for (var variable in properties) {
      if (properties.hasOwnProperty(variable)) {
        let property = properties[variable]
        menuItems.push(
          <Menu.Item key={variable}>
            <a >{this._getPropertyName(property.name)}</a>
          </Menu.Item>
        )
      }
    }
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        {menuItems}
      </Menu>
    );
    return (
      <Modal title="Basic Modal" visible={this.props.visible}
            onOk={this.handleOk} onCancel={this.handleCancel}
          >
          <Dropdown overlay={menu} trigger={['click']}>
           <a className="ant-dropdown-link" href="#">
             {this.state.selectProperty === undefined?'选择属性':this._getPropertyName(this.state.selectProperty)} <Icon type="down" />
           </a>
         </Dropdown>
         <Input onChange={(e)=>this.setState({propertyName:e.target.value})} disabled={!this.state.selectProperty} placeholder="输入组件属性名" />
      </Modal>
    )
  }

  _getState()
  {
    let state ={

    }
    if(this.props.controllerData.props === undefined)
    {
      return state;
    }
    let {style,...otherProps} = this.props.controllerData.props
    for (let i = 0; i < style.length; i++) {
      let styleProtoType = style[i]
      let styleObject = {
        name:styleProtoType.name,
        value:styleProtoType.value,
        type:styleProtoType.type
      }
      state[styleProtoType.name]= styleObject
    }
    for (let variable in otherProps) {
      if (otherProps.hasOwnProperty(variable)) {
        let propsProtoType = otherProps[variable];
        let propsObject = {
          name:propsProtoType.name,
          value:propsProtoType.value,
          type:propsProtoType.type
        }
        state[variable] = propsObject
      }
    }
    return this._addDefaulProps(state,this.props.controllerData.name);
  }

  _addDefaulProps(state,type)
  {
    let defaultObject;
    if(type === 'View')
    {
      defaultObject = ViewObject
    }
    else if(type === 'Image')
    {
      defaultObject = ImageObject;
    }
    else if(type === 'Text')
    {
      defaultObject = TextObject;
    }
    else if(type === 'TouchableOpacity')
    {
      defaultObject = TouchableObject
    }
    let {style,...otherProps} = defaultObject.props
    for (let i = 0; i < style.length; i++) {
      let styleProtoType = style[i]
      let styleObject = {
        name:styleProtoType.name,
        value:styleProtoType.default,
        type:styleProtoType.type
      }
      if(state[styleProtoType.name] === undefined)
      {
        state[styleProtoType.name] = styleObject;
      }
    }
    for (let variable in otherProps) {
      if (otherProps.hasOwnProperty(variable)) {
        let propsProtoType = otherProps[variable];
        let propsObject = {
          name:propsProtoType.name,
          value:propsProtoType.default,
          type:propsProtoType.type
        }
        if(state[propsProtoType.name] === undefined)
        {
          state[propsProtoType.name] = propsObject;
        }
      }
    }
    return state
  }
  _getPropertyName(key)
  {
    let dataTypeName = dataType.dataTypeName
    if(dataTypeName[key])
    {
      return dataTypeName[key];
    }
    else {
      return key;
    }
  }
}

function mapStateToProps(state) {
  return {
    controllerData: state.componentEditorData.propperties
  };
}

module.exports = connect(mapStateToProps)(BindComponentPropertyModal);
