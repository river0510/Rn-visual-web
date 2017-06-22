import React,{
  Component
} from 'react'
import { Input } from 'antd';
import MyInput from '../view/MyInput'

export default class InputComponent extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      value:this.props.defaultValue
    }
  }
  render(){
    return (
      <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{width:"50%"}}>
        {this.props.title}
        </div>
        <MyInput value={this.props.defaultValue}
                 onChange={(e)=>{
                   if(this.props.setValue)
                   {
                     this.props.setValue(e);
                   }
                 }}
        />
      </div>
    )
  }
}
