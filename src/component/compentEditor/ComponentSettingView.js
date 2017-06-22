import React,{
    Component
} from 'react'
import MySelect from '../view/MySelect';
import ReactDOM from 'react-dom';
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
import MyInput from '../view/MyInput';
import MySwitch from '../view/MySwitch';
import interfaceArray from '../../config/interface';
import jumpTypeArray from '../../config/jumpType';
import ImageSelect from '../view/ImageSelect'
import standardComponent from '../../config/standardComponent';
import util from '../../utils/Utils';
import AddExtraPropertyModal from '../screenEditor/AddExtraPropertyModal';
import ModifyExtraPropertyModal from '../screenEditor/ModifyExtraPropertyModal';
class ComponentSettingView extends Component{
    constructor(props)
    {
        super(props);
        this._onChange=this._onChange.bind(this);
        this.hasMultipleState=false;

    }
    render()
    {
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:"flex-start",margin:'5px',width:240}}>
                <AddExtraPropertyModal visible={this.props.addExtraPropertyVisible} onCancel={()=>this.props.update({addExtraPropertyVisible:false})}/>
                <ModifyExtraPropertyModal visible={this.props.modifyExtraPropertyVisible} onCancel={()=>this.props.update({modifyExtraPropertyVisible:false})}/>
                {this.props.selectedComponentConfig? this._renderExtractProperty():undefined}
            </div>
        )
    }

    _createInput(key,value,type,componentName){
        switch (type){
            case "state":
                return (
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",margin:'5px',width:220,}}>
                        {key}:
                        <MySelect
                            value={value}
                            data={this.componentStates}
                            onChange={(e)=>this.props.editComponentState(this.props.selectedComponentConfig.get('type'),e)}
                        />
                    </div>
                )
            case "image":
                return (
                    <ImageSelect name={key} value={value} onChange={(e)=>this._onChange(e,key)}/>
                )
            case "interface":
                return (
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",margin:'5px',width:220,}}>
                        {key}:
                        <MySelect
                            value={value}
                            data={interfaceArray}
                            onChange={(e)=>this._onChange(e,key)}
                        />
                    </div>
                )
            case "jumpType":
                return (
                    <div style={{display:"flex",flexDirection:"row" ,alignItems:"center",margin:'5px',width:220,}}>
                        {key}:
                        <MySelect
                            value={value}
                            data={jumpTypeArray}
                            onChange={(e)=>this._onChange(e,key)}
                        />
                    </div>
                )
            case "object":
                return (
                    <div style={{display:"flex",flexDirection:"row" ,alignItems:"center",margin:'5px',width:220,}}>
                        {key}:{JSON.stringify(value)}
                        <Button type="primary" size="small" style={{marginLeft: "10px"}} onClick={()=>{this.props.update({modifyExtraPropertyVisible:true});this.props.update({modifyProperty: key})}}>修改</Button>
                    </div>
                )
            default:
                if(componentName&&componentName.indexOf('ZH12A')>=0&&key==='align')
                {
                    return (
                        <div style={{display:"flex",flexDirection:"row" ,alignItems:"center",margin:'5px',width:220,}}>
                            {key}:
                            <MySelect
                                value={value}
                                data={["L","R"]}
                                onChange={(e)=>this._onChange(e,key)}
                            />
                        </div>
                    )
                }else{
                    return (
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",margin:'5px',width:220,}}>
                            {key}:
                            <MyInput value={value}
                                     onChange={(e)=>this._onChange(e,key)}
                            />
                        </div>
                    )
                }

        }
    }
    _getComponentByName(name){
        let component;
        if(standardComponent[name]!==undefined){
            component=standardComponent[name];
        }
        else {
            for (let i = 0; i < this.props.componentList.length; i++) {
                if (this.props.componentList[i].componentName === name) {
                    component=this.props.componentList[i].children[0];
                    break;
                }
            }
        }
        if(util.hasMultipleState(component)){
            this.hasMultipleState=true;
            let state=this.props.componentStates.get(name);
            this.componentStates=[];
            this.properties={};
            for(let c in component){
                this.componentStates.push(c);
                this.properties= {...this.properties,...this._getEditorProperty(component[c])};
            }
            for(let c in component){
                if(state === undefined||c===state){
                    this.componentState=c;
                    return component[c];
                }
            }
        }else{
            this.hasMultipleState=false;
        }
        return component;
    }

    _renderExtractProperty()
    {
        let component;
        let componentName=this.props.selectedComponentConfig.get('type');
        component=this._getComponentByName(componentName);
        let items=[];
        items.push(
            <div style={{display:"flex",flexDirection:"row",margin:'5px',width:220,}}>
                <p>磁贴名称：</p>
                <p>{componentName}</p>

            </div>);
        items.push(
            <div style={{position:"relative",display:'flex',flexDirection:'row',justifyContent:'space-around',flex:1}}>
                <Button type="primary" style={{margin: "5px"}} onClick={()=>this.props.delete()}>删除</Button>
                <Button type="primary" style={{margin: "5px"}} onClick={()=>this.props.up()}>上移</Button>
                <Button type="primary" style={{margin: "5px"}} onClick={()=>this.props.down()}>下移</Button>
                <Button type="primary" style={{margin: "5px"}} onClick={()=>this.props.update({addExtraPropertyVisible:true})}>添加</Button>
            </div>
        );
        if(this.hasMultipleState){
            items.push(this._createInput("state",this.componentState,"state",componentName));
        }
        items.push(
            <div style={{position:"relative",display:'flex',flexDirection:'row'}}>
                <MySwitch width={40} height={40}
                          status={this.props.selectedComponentConfig.getIn(['data','borderLeftWidth'])==='1'}
                          onPic='./src/img/left_on.png' offPic="./src/img/left_off.png"
                          onStatusChanged={(status)=>this._onStatusChanged(status,"borderLeftWidth")}
                />
                <MySwitch width={40} height={40}
                          status={this.props.selectedComponentConfig.getIn(['data','borderRightWidth'])==='1'}
                          onPic='./src/img/right_on.png' offPic="./src/img/right_off.png"
                          onStatusChanged={(status)=>this._onStatusChanged(status,"borderRightWidth")}
                />
                <MySwitch width={40} height={40}
                          status={this.props.selectedComponentConfig.getIn(['data','borderTopWidth'])==='1'}
                          onPic='./src/img/top_on.png' offPic="./src/img/top_off.png"
                          onStatusChanged={(status)=>this._onStatusChanged(status,"borderTopWidth")}
                />
                <MySwitch width={40} height={40}
                          status={this.props.selectedComponentConfig.getIn(['data','borderBottomWidth'])==='1'}
                          onPic='./src/img/bottom_on.png' offPic="./src/img/bottom_off.png"
                          onStatusChanged={(status)=>this._onStatusChanged(status,"borderBottomWidth")}
                />
            </div>
            );
        items.push(this._createInput("width",this.props.selectedComponentConfig.get("width")));
        items.push(this._createInput("height",this.props.selectedComponentConfig.get("height")));
        items.push(this._createInput("interface",this.props.selectedComponentConfig.getIn(['data',"interface"]),'interface'));
        items.push(this._createInput("jumpType",this.props.selectedComponentConfig.getIn(['data',"jumpType"]),'jumpType'));

        let properties;
        if(this.hasMultipleState){
            properties=this.properties;
        }else{
            properties= this._getEditorProperty(component);
        }
        for (let key in properties) {
            let type = properties[key];
            items.push(this._createInput(key,this.props.selectedComponentConfig.getIn(['data',key]),type,componentName));
        }
        let config=this.props.selectedComponentConfig.get('data').toJS();
        for(let c in config){
            if(!properties.hasOwnProperty(c)&&!this._isBorderProperty(c)){
                if(config[c] instanceof Object || config[c] instanceof Array){
                    items.push(this._createInput(c,config[c],'object',componentName))
                }else{
                   items.push(this._createInput(c,config[c],undefined,componentName)); 
                }
            }
        }
        return items;
    }
    _isBorderProperty(property){
        if(property==='borderLeftWidth'||property==='borderRightWidth'||property==='borderBottomWidth'||property==='borderTopWidth')
            return true;
    }
    _onChange(value, property){
        this.props.edit(this.props.selectedComponentConfig.get('type'),property,value);
    }
    _onStatusChanged(status,property){
        this.props.edit(this.props.selectedComponentConfig.get('type'),property,status? "1":"0");
    }
    _getEditorProperty(component){
        //property其实搞个字符串数组就好了
        let property={};
        if(component){
            let {style,...otherProps} = component.props
            for (let i = 0; i < style.length; i++) {
                let styleProtoType = style[i]
                if(styleProtoType.constant === false)
                {
                    property[styleProtoType.componentPropName] = styleProtoType.type
                }
            }
            for (let variable in otherProps) {
                if (otherProps.hasOwnProperty(variable)) {
                    let propsProtoType = otherProps[variable];
                    if(propsProtoType.constant === false)
                    {
                        property[propsProtoType.componentPropName] = propsProtoType.type
                    }
                }
            }
        }
        if(component.children&&component.children.length>0){
            for(let i=0;i<component.children.length;i++){
                property={...property,...this._getEditorProperty(component.children[i])}
            }
        }
        return property;
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
    let images=[];
    let data=state.screenEditorData.get('images').toJS();
    for(var key in data){
        images.push(key);
    }
    return {
        selectedComponentConfig:state.screenEditorData.getIn(['screenData',state.screenEditorData.get('selectedScreen'),'items',state.screenEditorData.get('selectedIndex')]),
        componentList:state.componentEditorData.componentConfig,
        componentStates:state.screenEditorData.get('componentStates'),
        addExtraPropertyVisible:state.screenStateData.addExtraPropertyVisible,
        modifyExtraPropertyVisible: state.screenStateData.modifyExtraPropertyVisible,
        modifyProperty: state.screenStateData.modifyProperty,
        images
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        update: (data) => {
            dispatch({type:"UPDATE_SCREEN",data:data});
        },
        edit: (name,property,value) => {
            dispatch({type:"SCREEN_EDIT_COMPONENT",name,property,value});
        },
        uploadImage:(name,value)=>{
            dispatch({type:"SCREEN_UPLOAD_IMAGE",name,value});
        },
        editComponentState:(name,value)=>{
            dispatch({type:"SCREEN_EDIT_COMPONENT_STATE",name,value});

        },
        delete: ()=>{
            dispatch({type:"SCREEN_DELETE_COMPONENT"});

        },
        up: ()=>{
            dispatch({type:"SCREEN_UP_COMPONENT"});

        },
        down: ()=>{
            dispatch({type:"SCREEN_DOWN_COMPONENT"});

        },
        addProperty:(key,value)=>{
            dispatch({type:"SCREEN_ADD_EXTRA_PROPERTY",key,value});
        }
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(ComponentSettingView);
