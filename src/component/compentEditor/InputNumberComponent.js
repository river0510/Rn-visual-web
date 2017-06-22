import React, {Component} from 'react'
import {InputNumber} from 'antd';

export default class InputNumberComponent extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      value: this.props.defaultValue
    }
  }
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <div style={{
          width: "50%"
        }}>
          {this.props.title}
        </div>
        <InputNumber onChange={(e) => {
          this.setState({value: e});
          if (this.props.setValue) {
            this.props.setValue(e)
          }
        }} onPressEnter={(e) => {
          if (this.props.setValue) {
            this.props.setValue(this.state.value)
          }
        }} value={this.state.value} defaultValue={this.props.defaultValue} min={0} step={1}/>
      </div>
    )
  }
}
