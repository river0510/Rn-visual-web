import React,{
  Component
} from 'react'
import { Modal, Button, Menu, Dropdown, Icon,Input} from 'antd';
import SetOfControl from '../../config/index'
import TextObject from '../../config/text'
import ImageObject from '../../config/image'
import ViewObject from '../../config/view'
import dataType from '../../config/dataType'
import dispatchActions from '../../actions/index'
var {connect} = require('react-redux');
class ImportDataModal extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      content:''
    }
  }

  render()
  {
    let {componentConfig} = this.props;
    let str = JSON.stringify(componentConfig)
    return (
      <Modal title="导入数据" visible={this.props.visible}
          onCancel={this.props.onCancel} onOk={() =>
              {
                let {dispatch} = this.props
                dispatchActions.componentEditorData.processAction(dispatch,'IMPORT_COMPONENT',{component:JSON.parse(this.state.content)});
                this.setState({content:""})
                this.props.onOk()
              }
            }
          >
          <Input type="textarea"
            onChange={(e)=>this.setState({content:e.target.value})}
            placeholder="输入组件配置数据" autosize />
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    componentConfig: state.componentEditorData.componentConfig
  };
}

module.exports = connect(mapStateToProps)(ImportDataModal);
