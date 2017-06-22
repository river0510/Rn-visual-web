import React, {Component} from "react";
import ContainerView from './Container'
import ImageView from './ImageView'
import TextView from './TextView'
import TouchableOpacity from './TouchableOpacity'
var {connect} = require('react-redux');

class ScrollView extends Component {
  render() {
    let {
        style,
        componentIdentifier,
        componentStatus,
        subComponentType,
        list,
        componentConfig,
        ...props
    } = this.props;
    style.overflowX = 'auto';
    style.overflowY = 'hidden';
    if (componentStatus === 1) {
      style.borderColor = 'blue';
      style.borderWidth = '1px';
      style.borderStyle = 'solid';
    } else if (style.borderColor && style.borderWidth) {
      style.borderStyle = 'solid';
    }
    
    let children = [];
    let childComponent;
    
    componentConfig.forEach((item,index)=>{
      if(item.identifier === subComponentType){
        childComponent = item.children[0];
      }
    })
    console.log(childComponent)
    
    let childContainerWidth = 0;
    list.forEach((item,index)=>{
      childContainerWidth += item.width || 0;
    })
    children = this.parseFunction(childComponent)

    return (
        <div style={style} {...props} >
          <div style={{width: 1000,display: "flex",flexDirection: "row"}}>
            {children}
          </div>
        </div>
    )
  }

    parseFunction(component)
    {

        let children = [];
        if(component === undefined)
        {
            return null
        }

        if(component&&component.children&&component.children.length > 0)
        {
            for (let i = 0; i < component.children.length; i++) {
                let child = component.children[i];
                if(child instanceof Object)
                {
                    let childElement = this.parseFunction(child)
                    if(childElement)
                    {
                        children.push(childElement)
                    }
                }
            }
        }
        return  React.createElement(this.getComponent(component.name),this.getParseProps(component.props,{componentIdentifier:component.identifier,componentStatus:0}),...children);
    }

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

    getParseProps(props,notStyleProps)
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
                            items[item.name] = this._parseValue(item.type,item.value,item.name);
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
                        readableProps[variable] = this._parseValue(value.type,value.value);
                    }
                }
            }
        }
        return {...readableProps,...notStyleProps};
    }

    _parseValue(type,value,name)
    {
        if(value === 'componentWidth')
        {
            return this.width+'px';
        }
        else if(value === 'componentHeight')
        {
            return this.height+'px';
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
            if(name==='alignItems'){
                if(value==="L") {
                    value='flex-start';
                }
                if(value==="R"){
                    value='flex-end';
                }

            }
            return value
        }
    }
}

const mapStateToProps = (state)=>{
  return {
    componentConfig: state.componentEditorData.componentConfig,
    a:state.screenStateData.a2,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
  }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(ScrollView);
