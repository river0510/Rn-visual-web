/**
 * Created by luohaoxin on 2017/5/15.
 */
import React, {
    Component
}
    from 'react'
import ContainerView from './Container'
import ImageView from './ImageView'
import TextView from './TextView'
import TouchableOpacity from './TouchableOpacity'
import ComponentParserView from './ComponentParserView'
import LatticePlace from '../../utils/LatticePlace'
var {connect} = require('react-redux');
import textobject from './testobject'
import standardComponent from '../../config/standardComponent';
import util from '../../utils/Utils';
class ScreenParser extends Component {
    constructor(props)
    {
        super(props)
    }
    render () {
        let latticePlace=new LatticePlace(this.props.contentSize.width);
        return (
            <div style={{position:'relative',backgroundColor:"white",paddingBottom:'22px',margin:'22px',width:this.props.contentSize.width,height:this.props.contentSize.height,marginLeft:'auto',marginRight:'auto',marginTop:'50px',marginBottom:"50px"}}>
                {this.props.children}
                {this.props.componentConfigList.map((section,key)=>{
                    let componentConfig=section.get('data')? section.get('data').toJS():{};
                    return(
                        <ComponentParserView selected={this.props.selectedIndex===key? 1:0} index={key}
                                             component={this._getComponentByName(section.get('type'))}
                                             componentConfig={componentConfig}
                                             contentSize={{height:section.get('height'),width:section.get('width')}}
                                             position={latticePlace.put(this._parseContentSize(section.get('width')),this._parseContentSize(section.get('height')))}
                                             />
                    );
                })}

            </div>
        )
    }


    // parseFunction(object,index)
    // {
    //     let children = [];
    //     if(object === undefined)
    //     {
    //         return null
    //     }
    //     if(object&&object.children&&object.children.length > 0)
    //     {
    //         for (let i = 0; i < object.children.length; i++) {
    //             let child = object.children[i];
    //             if(child instanceof Object)
    //             {
    //                 let childElement = this.parseFunction(child,i)
    //                 if(childElement)
    //                 {
    //                     children.push(childElement)
    //                 }
    //             }
    //         }
    //     }
    //     return  React.createElement(this.getComponent(object.name),this.getParseProps(object.props,index,{componentIdentifier:object.identifier,componentStatus:object.status}),...children);
    // }

    getComponent(name)
    {
        switch (name) {
            case 'Text':
                return TextView;
            case 'Image':
                return ImageView;
            case 'View':
                return ContainerView;
            case 'TouchableOpacity':
                return TouchableOpacity;
            default:
                return undefined;
        }
    }

    getParseProps(props,index,notStyleProps)
    {
        let readableProps = {};
        for (var variable in props) {
            if (props.hasOwnProperty(variable)) {
                let value = props[variable]
                if(value instanceof Array)
                {
                    let items = {};
                    for (let i = 0; i < value.length; i++) {
                        let item = value[i];
                        if(item.constant)
                        {
                            items[item.name] = this._parseValue(item.type,item.value);
                        }
                        else {
                            items[item.name] = this._parseValue(item.type,this.props[item.componentPropName]||item.value);
                        }
                    }
                    readableProps[variable] = items
                }
                else if(value instanceof Object)
                {
                    if(value.constant)
                    {
                        readableProps[variable] = this._parseValue(value.type,value.value);
                    }
                    else {
                        readableProps[variable] = this._parseValue(value.type,this.props[value.componentPropName]||value.value);
                    }
                }
            }
        }
        if(readableProps.style)
        {
            readableProps.style.zIndex = index;
        }
        else {
            readableProps.style= {zIndex:index};
        }
        return {...readableProps,...notStyleProps};
    }

    _parseValue(type,value)
    {
        if(value === 'componentWidth')
        {
            return this.props.contentSize.width*this.props.a+'px'
        }
        else if(value === 'componentHeight')
        {
            return this.props.contentSize.height*this.props.a+'px'
        }
        else if(type === 'measurement')
        {
            return value === undefined? undefined:value*this.props.a+'px'
        }
        else if(type === 'image')
        {
            return value
        }
        else
        {
            return value
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
            let state=this.props.componentStates.get(name);
            for(let c in component){
                if(state === undefined||c===state){
                    return component[c];
                }
            }
        }
        return component;
    }
    _parseContentSize(value){
        let t=typeof value;
        if(t==='string'){
            let array=value.split('a');
            if(array.length===2){
                return parseInt(array[0])*this.props.a;
            }else {
                return parseInt(array[0])*5*this.props.a;
            }
        }else if(t==='number'){
            return value*5*this.props.a;
        }
    }
}

function mapStateToProps(state) {
    return {
        selectedIndex:state.screenEditorData.get('selectedIndex'),
        componentConfigList: state.screenEditorData.getIn(['screenData',state.screenEditorData.get('selectedScreen'),'items']),
        componentList:state.componentEditorData.componentConfig,
        a:state.screenStateData.a2,
        componentStates:state.screenEditorData.get('componentStates'),
        // propperties:state.componentEditorData.properties,
        // identifier:state.componentEditorData.identifier,
        // selectedComponentIndex:state.componentEditorData.selectedComponentIndex
    };
}

module.exports = connect(mapStateToProps)(ScreenParser);
