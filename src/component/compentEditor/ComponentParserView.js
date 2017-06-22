/**
 * Created by luohaoxin on 2017/5/16.
 */
import React, {
    Component
}
    from 'react'
import ContainerView from './Container'
import ImageView from './ImageView'
import TextView from './TextView'
import TouchableOpacity from './TouchableOpacity'
import ScrollView from './ScrollView'
var {connect} = require('react-redux');
class ComponentParserView extends Component {
    constructor(props)
    {
        super(props)
        this._onClick=this._onClick.bind(this);
        this._onContextMenu=this._onContextMenu.bind(this);
    }
    render () {
        this.width=this._parseContentSize(this.props.contentSize.width);
        this.height=this._parseContentSize(this.props.contentSize.height);
        let selectedBorder = [];
        selectedBorder.push(<div style={{display:"flex",position:'absolute',top: 0,left:0,borderColor:'blue',borderWidth:"1px",borderStyle:'solid',width:this.width,height:1,}}/>);
        selectedBorder.push(<div style={{display:"flex",position:'absolute',bottom: 0,left:0,borderColor:'blue',borderWidth:"1px",borderStyle:'solid',width:this.width,height:1,}}/>);
        selectedBorder.push(<div style={{display:"flex",position:'absolute',top: 0,left:0,borderColor:'blue',borderWidth:"1px",borderStyle:'solid',width:1,height:this.height,}}/>);
        selectedBorder.push(<div style={{display:"flex",position:'absolute',top: 0,right:0,borderColor:'blue',borderWidth:"1px",borderStyle:'solid',width:1,height:this.height,}}/>);
        return (
            <div style={{display:"flex",position:'absolute',backgroundColor:"#ffffff",left:this.props.position.x,top:this.props.position.y,width:this.width,height:this.height}}
                 onClick={this._onClick}
                 onContextMenu={this._onContextMenu}
            >   
                {this._renderBorder()}
                {this.parseFunction(this.props.component,0)}
                {this.props.selected===1?selectedBorder:undefined}

            </div>
        )
    }
    _onClick(){
        this.props.select(this.props.index);
    }
    _onContextMenu(){

    }
    _renderBorder(){
        let left=this.props.componentConfig.borderLeftWidth==='1'? '1px':'0px';
        let right=this.props.componentConfig.borderRightWidth==='1'? '1px':'0px';
        let bottom=this.props.componentConfig.borderBottomWidth==='1'? '1px':'0px';
        let top=this.props.componentConfig.borderTopWidth==='1'? '1px':'0px';
        return (
            <div style={{display:"flex",position:'absolute',borderColor:'#999999',
                borderLeftWidth:left,borderRightWidth:right,borderBottomWidth:bottom,borderTopWidth:top,
                borderStyle:'solid',width:this.width,height:this.height}}>
            </div>
        )
    }
    parseFunction(component,index)
    {

        let children = [];
        if(component === undefined)
        {
            return null
        }

        if((component.name) === "ScrollView"){           
            return React.createElement(this.getComponent(component.name),this.getParseProps(component.props,{componentIdentifier:component.identifier,componentStatus:0}));
        }

        if(component&&component.children&&component.children.length > 0)
        {
            for (let i = 0; i < component.children.length; i++) {
                let child = component.children[i];
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
            case 'ScrollView':
                return ScrollView;
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
                            items[item.name] = this._parseValue(item.type,this.props.componentConfig[item.componentPropName]||item.value,item.name);
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
                        readableProps[variable] = this._parseValue(value.type,this.props.componentConfig[value.componentPropName]||value.value);
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
const mapStateToProps = (state) => {
    return {
        a:state.screenStateData.a2,
        images:state.screenEditorData.get("images")
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        select: (index) => {
            dispatch({type:"SCREEN_SELECT_COMPONENT",index});
        },
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(ComponentParserView);
