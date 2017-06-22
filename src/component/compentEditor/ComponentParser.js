import React, {
  Component
}
from 'react'
import ContainerView from './Container'
import ImageView from './ImageView'
import TextView from './TextView'
import TouchableOpacity from './TouchableOpacity'
var {connect} = require('react-redux');
import textobject from './testobject'

class ComponentParser extends Component {
  constructor(props)
  {
    super(props)

    // this.config = textobject
    // this.state=this.config;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('第二个文本下移了10px')
    this.config.object.children[2].props.style[0].value = this.config.object.children[2].props.style[0].value+10
    this.setState(
      this.config
    )
  }
  render () {
    return (
        <div style={this.props.style}>
          {this.props.children}
          {this.props.selectedComponentIndex? this.parseFunction(this.props.componentConfig[this.props.selectedComponentIndex].children[0],0):undefined}
        </div>
      )
    }


    parseFunction(object,index)
    {
      let children = [];
      if(object === undefined)
      {
        return null
      }
      if(object&&object.children&&object.children.length > 0)
      {
        for (let i = 0; i < object.children.length; i++) {
          let child = object.children[i];
          if(child instanceof Object)
          {
            let childElement = this.parseFunction(child,i)
            if(childElement)
            {
              children.push(childElement)
            }
          }
        }
      }
      return  React.createElement(this.getComponent(object.name),this.getParseProps(object.props,index,{componentIdentifier:object.identifier}),...children);
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
      return {...readableProps,...notStyleProps,componentStatus:notStyleProps.componentIdentifier===this.props.identifier? 1:0};
    }

    _parseValue(type,value)
    {
      if(value === 'componentWidth')
      {
        return this.props.contentSize.width+'px'
      }
      else if(value === 'componentHeight')
      {
        return this.props.contentSize.height+'px'
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
}

function mapStateToProps(state) {
  return {
    componentConfig: state.componentEditorData.componentConfig,
    propperties:state.componentEditorData.properties,
    identifier:state.componentEditorData.identifier,
    selectedComponentIndex:state.componentEditorData.selectedComponentIndex
  };
}

module.exports = connect(mapStateToProps)(ComponentParser);
