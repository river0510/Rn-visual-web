/**
 * Created by luohaoxin on 2017/5/26.
 */
import React,{
    Component
} from 'react'
import { Select} from 'antd';
const Option = Select.Option;
class MySelect extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : null,
        }
        this.value=this.props.value;
        // this._onChange2=this._onChange2.bind(this);
        // this._onChange1=this._onChange1.bind(this);
        this._inputChange=this._inputChange.bind(this);
        // this._onBlur=this._onBlur.bind(this);
        // this._onPressEnter=this._onPressEnter.bind(this);
    }
    render(){
        return (
            <div className='select-input' style={{display:'flex',position:"relative", flex:1}}>
                <Select
                    value={this.value}
                    showSearch
                    style={{ position:"relative",width:'100%'}}
                    optionFilterProp="children"
                    onSearch = {input => {this._inputChange(input)}}
                    onBlur={(e)=>this.props.onChange(e)}
                    onSelect={(e)=>this.props.onChange(e)}
                    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {this.props.data.map((section,key)=>{
                        return (<Option value={section}>{section}</Option>
                        )
                    })}
                    <Option value={this.state.inputValue}>{this.state.inputValue}</Option>
                </Select>
            </div>

        )
    }
    _inputChange(input){
        console.log(input);
        this.setState({
            inputValue:input
        });
    }
    // _onBlur(e){
    //     this.props.onChange(e)
    // }
    // _onPressEnter(e){
    //     this.props.onChange(e)
    // }
    componentWillReceiveProps(props){
        this.value=props.value;
    }
}
module.exports=MySelect