/**
 * Created by luohaoxin on 2017/5/5.
 */
import React, {Component} from "react";
import {Modal, Input, Message} from "antd";
var {connect} = require('react-redux');
import MyInput from '../view/MyInput';
class RenameModal extends Component {
    constructor(props) {
        super(props);
        this.handleOk = this.handleOk.bind(this);
    }

    handleOk() {
        var b = document.getElementById('inputName');
        this.props.update({renameModalVisible: false});
        this.props.changeName(this.refs.ref.getValue());
    }
    render() {
        return (
            <Modal title="重命名磁贴" visible={this.props.renameModalVisible}
                   onCancel={()=> {
                       this.props.update({renameModalVisible: false})
                   }} onOk={this.handleOk
            }
            >
                <MyInput value={this.props.renameContainerName} ref="ref" id="inputName"/>

            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        renameModalVisible: state.screenStateData.renameModalVisible,
        renameIdentifier: state.componentEditorData.renameIdentifier,
        renameContainerName: state.componentEditorData.renameContainerName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (data) => {
            dispatch({type: "UPDATE_SCREEN", data: data});
        },
        changeName: (name)=> {
            dispatch({type: "CHANGE_CONTAINER_NAME", name: name})
        },
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(RenameModal);
