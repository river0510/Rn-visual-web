import React,{
  Component
} from 'react'
import { Input,InputNumber } from 'antd';

import RadioWithInputComponent from './RadioWithInputComponent'
import DropDown from './DropDown'
import InputComponent from './InputComponent'
import InputNumberComponent from './InputNumberComponent'
import TextObject from '../../config/text'
import ImageObject from '../../config/image'
import ViewObject from '../../config/view'
import TouchableOpacityObject from '../../config/touchableOpacity'
import dataType from '../../config/dataType'
import dispatchActions from '../../actions/index'
import ImageSelect from '../view/ImageSelect'

var {connect} = require('react-redux');

class ControllerPropertyInspector extends Component
{
  constructor(props)
  {
    super(props)

  }
  render()
  {
    return (
      <div style={{display:'flex',flexDirection:'column'}}>
        {this._renderProperty()}
      </div>
    )
  }

  // componentDidUpdate(prevProps, prevState) {
  //   let {inspectorIdentifier,controllerData,dispatch} = this.props
  //   if(prevProps.inspectorIdentifier === inspectorIdentifier)
  //   {
  //     dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_REPLACE_COMPONENT',{identifier:inspectorIdentifier,component:controllerData});
  //   }
  // }

  _renderProperty()
  {

    let props = this._getState()
    let array = []
    // for (let i = 0; i < style.length; i++) {
    //   let styleObject = style[i]
    //   array.push(this._selectStyleController(styleObject))
    // }
    for (let variable in props) {
      if (props.hasOwnProperty(variable)) {
        let propsObject = props[variable]
        array.push(this._selectStyleController(propsObject))
      }
    }
    return array;
  }

  _getState()
  {
    let state ={

    }
    if(this.props.controllerData===undefined||this.props.controllerData.props === undefined)
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
      defaultObject = TouchableOpacityObject
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

  _selectStyleController(object)
  {
    switch (object.type) {
      case 'image':
        return this._renderSelectImage(object)
      case 'string':
      case 'color':
        return this._renderInputText(object)
      case 'measurement':
        return this._renderMeasurement(object)
      case 'enum':
        return this._renderDropDown(object)
      case 'int':
        return this._renderInputInt(object)
      default:
    }
  }
  _renderSelectImage(style){
    return (
        <ImageSelect name={this._getPropertyName(style.name)} value={style.value} onChange={(e)=>{
          let {dispatch} = this.props
          dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_CHANGE_PROPERTY',{name:style.name,value:e});
        }}/>
    )
  }
  _renderInputText(style)
  {
    return (
      <InputComponent key={style.name} setValue={
          (e)=>{
            let {dispatch} = this.props
            dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_CHANGE_PROPERTY',{name:style.name,value:e});
          }
        } title={this._getPropertyName(style.name)} defaultValue={style.value}/>
    )
  }

  _renderInputInt(style)
  {
    return (
      <InputNumberComponent key={style.name} setValue={
          (e)=>{
            let {dispatch} = this.props
            dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_CHANGE_PROPERTY',{name:style.name,value:e});
          }
        } title={this._getPropertyName(style.name)} defaultValue={style.value}/>

    )
  }

  _renderMeasurement(style)
  {
    let value;
    let textValue = '';
    if(style.value === 'componentHeight')
    {
      value=0
    }
    else if(style.value === 'componentWidth')
    {
      value =1;
    }
    else if(style.value === undefined)
    {
      value = 2;
    }
    else {
      value = 3;
      textValue = style.value;
    }
    return(
      <div key={style.name} style={{display:'flex',flexDirection:'row',marginBottom:'5px'}}>
        <div style={{width:"50%"}}>
        {this._getPropertyName(style.name)}
        </div>
        <div>
          <RadioWithInputComponent setValue={(value)=> {
              let {dispatch} = this.props
              dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_CHANGE_PROPERTY',{name:style.name,value:value==='auto'?undefined:value});
            }}
            select={value} textValue={textValue} radioTexts={['componentHeight','componentWidth','auto','自定义']} inputStyle="InputNumber"/>
        </div>
      </div>
    )
  }

  _renderDropDown(style)
  {
    let maping = dataType.dataTypeMapping;
    if(maping[style.type] === undefined)
    {
      return;
    }
    if(maping[style.type][style.name] === undefined)
    {
      return;
    }
    let menus = maping[style.type][style.name].params
    return (
      <div key={style.name} style={{display:'flex',flexDirection:'row',marginBottom:'5px'}}>
        <div style={{width:"50%"}}>
        {this._getPropertyName(style.name)}
        </div>
        <DropDown onSelect={(value)=>{
            let {dispatch} = this.props
            dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_CHANGE_PROPERTY',{name:style.name,value:value});
          }} value={style.value} menus={menus}/>
      </div>
    )
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
    controllerData: state.componentEditorData.propperties,
    inspectorIdentifier:state.componentEditorData.identifier
  };
}

module.exports = connect(mapStateToProps)(ControllerPropertyInspector);
