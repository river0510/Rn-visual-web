import React, {Component} from "react";
import {Modal, message} from "antd";
import copy from "copy-to-clipboard";
import JSONPretty from "react-json-pretty";
var {connect} = require('react-redux');
import {fileDownload} from "../../utils/Utils";
class ShowScreenModal extends Component
{
  constructor(props)
  {
    super(props);
    this.handleCopy=this.handleCopy.bind(this);
  }
  render()
  {
    let {screenConfig} = this.props;
    let str = JSON.stringify(screenConfig)
    return (
        <Modal title="姗格化配置json" visible={this.props.visible}
               onCancel={this.props.onCancel}
               onOk={this.handleCopy}
               okText="复制"
          >
          <div style={{overflow:'scroll',height:"300px"}}>
            <JSONPretty id="json-pretty" json={screenConfig}/>
          </div>
      </Modal>
    )
  }

  handleCopy() {
    let {screenConfig} = this.props;
    copy(JSON.stringify(screenConfig,null,3));
    message.info("已复制到剪贴板");
    // fileDownload("module.exports = "+JSON.stringify(componentConfig,null,3), this.props.containerName+".js",'text/plain');
  }
}

function mapStateToProps(state) {
  return {
    screenConfig:state.screenEditorData.getIn(['screenData',state.screenEditorData.get('selectedScreen')]).toJS()
  };
}

module.exports = connect(mapStateToProps)(ShowScreenModal);
