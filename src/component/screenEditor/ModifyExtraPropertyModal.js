import React, {Component} from "react";
import {Modal, message} from "antd";
var {connect} = require('react-redux');
import MyInput from '../view/MyInput';
class ModifyExtraPropertyModal extends Component
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
            <Modal title="修改自定义属性" visible={this.props.visible}
                   onCancel={this.props.onCancel}
                   onOk={this.handleCopy}
                   okText="完成"
            >
                <div style={{height:"50px",marginBottom:30}}>
                    <p>属性名:{this.props.modifyProperty}</p>
                    <p>值:</p>
                    <MyInput ref="value"/>
                </div>
            </Modal>
        )
    }

    handleCopy() {
        let value = this.refs.value.getValue();
        try{ 
            value = JSON.parse(value)
        }catch(e){
            if (value[0] === '{'){
                try{
                    value = eval('('+value+')');
                }catch(e){
                    console.log(e)
                }                
            }
        }
        this.props.modify(this.props.modifyProperty,value);
        this.props.update({modifyExtraPropertyVisible:false})
    }
}

function mapStateToProps(state) {
    return {
        screenConfig:state.screenEditorData.getIn(['screenData',state.screenEditorData.get('selectedScreen')]).toJS(),
        modifyProperty: state.screenStateData.modifyProperty
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        modify: (key,value) => {
            dispatch({type:"SCREEN_ADD_EXTRA_PROPERTY",key,value});
        },
        update: (data) => {
            dispatch({type:"UPDATE_SCREEN",data:data});
        },
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(ModifyExtraPropertyModal);
