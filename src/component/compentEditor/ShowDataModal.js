import React, {Component} from "react";
import {Modal, message} from "antd";
import copy from "copy-to-clipboard";
import JSONPretty from "react-json-pretty";
var {connect} = require('react-redux');
import {fileDownload} from "../../utils/Utils";
class ShowDataModal extends Component
{
  constructor(props)
  {
    super(props);
    this.handleCopy=this.handleCopy.bind(this);
  }
  render()
  {
    let {componentConfig} = this.props;
    let str = JSON.stringify(componentConfig)
    return (
        <Modal title="磁贴json" visible={this.props.visible}
               onCancel={this.props.onCancel}
               onOk={this.handleCopy}
               okText="复制"
          >
          <div style={{overflow:'scroll',height:"300px"}}>
            <JSONPretty id="json-pretty" json={componentConfig}/>
          </div>
      </Modal>
    )
  }

  handleCopy() {
    let {componentConfig} = this.props;
    copy("module.exports = "+JSON.stringify(componentConfig,null,3));
    message.info("已复制到剪贴板");
    // fileDownload("module.exports = "+JSON.stringify(componentConfig,null,3), this.props.containerName+".js",'text/plain');
  }
}

function mapStateToProps(state) {
  return {
    componentConfig: state.componentEditorData.propperties.children? state.componentEditorData.propperties.children[0]:{},
    containerName:state.componentEditorData.propperties.componentName
  };
}

module.exports = connect(mapStateToProps)(ShowDataModal);
