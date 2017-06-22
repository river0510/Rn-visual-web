/**
 * Created by luohaoxin on 2017/5/24.
 * 为了避免在Input  onchange里频繁调用reducer,而是在
 */
import React, {Component} from "react";
import {Input} from "antd";

class MyInput extends Component {
    constructor(props) {
        super(props);
        this.value=this.props.value;
        this._onChange=this._onChange.bind(this);
    }

    render() {
        return (                
            <Input
                       style={{...this.props.style}}
                       value={this.value}
                       onChange={(e)=>this._onChange(e)}
                       onBlur={(e)=>this.props.onChange(e.target.value)}
                       onPressEnter={(e)=>this.props.onChange(e.target.value)}/>
        )
    }
    _onChange(e){
        this.value=e.target.value;
        this.setState({});
    }
    getValue(){
        return this.value;
    }
    componentWillReceiveProps(props){
        this.value=props.value;
    }
}
module.exports=MyInput