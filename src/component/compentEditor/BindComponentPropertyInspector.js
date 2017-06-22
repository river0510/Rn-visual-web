import React,{
  Component
} from 'react'
import { Input,InputNumber,Button } from 'antd';

import RadioWithInputComponent from './RadioWithInputComponent'
import DropDown from './DropDown'
import InputComponent from './InputComponent'
import TextObject from '../../config/text'
import ImageObject from '../../config/image'
import ViewObject from '../../config/view'
import dataType from '../../config/dataType'
import dispatchActions from '../../actions/index'
import BindComponentPropertyModal from './BindComponentPropertyModal'

var {connect} = require('react-redux');

class ControllerPropertyInspector extends Component{
  constructor(props)
  {
    super(props)
    this.state = {
      showModal:false
    }
  }
  render()
  {
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems:"center",margin:'5px'}}>
      <Button type="primary" onClick={()=>this.setState({showModal:true})}>添加关联</Button>
      <BindComponentPropertyModal
        handleCancel={()=>this.setState({showModal:false})}
        parentIdentifier = {this.state.parentIdentifier}
        handleOk={()=>this.setState({showModal:false})}
        visible={this.state.showModal} />
      {this._renderExtractProperty()}
      </div>
    )
  }

  _renderExtractProperty()
  {
    let properties= this._getProperties();
    let items=[]
      for (let variable in properties) {
      if (properties.hasOwnProperty(variable)) {
        let property = properties[variable];
        items.push(
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",margin:'5px'}}>
            {this._getPropertyName(variable)+':'+property}
            <Button key={variable} type="primary" shape="circle" icon="close" onClick={()=>{
                let {dispatch} = this.props;
                dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_DELETE_EXTRACT',{propertyName:variable});
              }}/>
          </div>
        )
      }
    }
    return items;
  }

  _getProperties()
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
      if(styleProtoType.constant === false)
      {
        state[styleProtoType.name] = styleProtoType.componentPropName
      }
    }
    for (let variable in otherProps) {
      if (otherProps.hasOwnProperty(variable)) {
        let propsProtoType = otherProps[variable];
        if(propsProtoType.constant === false)
        {
          state[propsProtoType.name] = propsProtoType.componentPropName
        }
      }
    }
    return state;
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

module.exports = connect(mapStateToProps)(ControllerPropertyInspector);
