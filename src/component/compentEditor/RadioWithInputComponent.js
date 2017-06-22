import React,{
  Component
} from 'react'
import { Radio, Input,InputNumber } from 'antd';
const RadioGroup = Radio.Group;

export default class RadioWithInputComponent extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      value:0
    }
    this.onChange = this.onChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
    let value;
    if(this.props.radioTexts.length === e.target.value+1)
    {
      value = this.state.value
    }
    else {
      value = this.props.radioTexts[e.target.value]
    }
    if(this.props.setValue)
    {
      this.props.setValue(value)
    }
  }

  onTextChange(e)
  {
    if(e === '')
    {
      return e;
    }
    let value = isNaN(parseFloat(e)) ? this.props.textValue:parseFloat(e)
    if(this.props.setValue)
    {
      this.props.setValue(value)
    }
    return value
  }


  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.props.select}>
        {this._renderRaido()}
      </RadioGroup>
    );
  }

  _renderRaido()
  {
    let radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    if(this.props.radioStyle)
    {
      radioStyle = this.props.radioStyle
    }
    let radioControllers = [];
    for (let i = 0; i < this.props.radioTexts.length; i++) {
       let text = this.props.radioTexts[i]
       if(i !== this.props.radioTexts.length-1)
       {
         radioControllers.push(
           <Radio key={i+''} style={radioStyle} value={i}>{text}</Radio>
         )
       }
       else {
         radioControllers.push(
           <Radio key={i+''} style={radioStyle} value={i}>
             {text}
             {this.props.select === (this.props.radioTexts.length-1) ?  this._renderInput(): null}
           </Radio>
         )
       }
    }
    return radioControllers
  }


  _renderInput()
  {
    if(this.props.inputStyle==='InputNumber')
    {
      return <InputNumber value={this.props.textValue} onChange={this.onTextChange} min={0} step={0.1} style={{ width: 100, marginLeft: 10 }} />
    }
    else {
      return <Input onChange={this.onTextChange} style={{ width: 100, marginLeft: 10 }} />
    }
  }
}
