import React, {Component} from "react";
import {Modal, Menu, Dropdown, Icon} from "antd";
import SetOfControl from "../../config/index";
import dispatchActions from "../../actions/index";
var {connect} = require('react-redux');

class CreateNewControlModal extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      selectedControl:undefined
    }
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleMenuClick  = this.handleMenuClick.bind(this)
  }

  handleOk()
  {
    if(this.state.selectedControl === undefined)
    {
      return;
    }
    let  {dispatch} = this.props
    dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_ADD_COMPONENT',{
      parentIdentifier:this.props.parentIdentifier,
      randomNumber:this._getTimeStamp(),
      controlIndex:this.state.selectedControl
    });
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
    this.setState({selectedControl:e.key})
  }

  render()
  {
    let menuItems = []
    for (var variable in SetOfControl) {
      if (SetOfControl.hasOwnProperty(variable)) {
        menuItems.push(
          <Menu.Item key={variable}>
            <a >{variable}</a>
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
             {this.state.selectedControl === undefined?'选择控件':this.state.selectedControl} <Icon type="down" />
           </a>
         </Dropdown>
      </Modal>
    )
  }

  _getTimeStamp()
  {
    let timestamp = (new Date()).valueOf();
    return ''+timestamp;
  }
}

function mapStateToProps(state) {
  return {
    componentConfig: state.componentEditorData.componentConfig
  };
}

module.exports = connect(mapStateToProps)(CreateNewControlModal);
// module.exports= CreateNewControlModal
