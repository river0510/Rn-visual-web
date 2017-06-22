import ReactART from '@ecliptic/react-art'
import React,{Component} from 'react'
import './GridBackGround.css'

class GridBackGround extends Component {
  constructor(props) {
    super(props)
  }
  render()
  {
    // let path = ReactART.Path().moveTo(0, 18).lineTo(540, 18);
    let containerStyle = {
      position: 'absolute',
      width:this.props.contentSize.width+'px',
      height:this.props.contentSize.height+'px',
      marginRight: 'auto',
      marginLeft: 'auto',
      borderColor: 'gray',
      borderWidth: '1px',
      borderStyle: 'dotted',
    };
    let varray = [];
    let vcount = this.props.contentSize.width/this.props.a
    for (var i = 0; i < vcount-1; i++) {
      let path = ReactART.Path().moveTo(this.props.a * (i+1),0).lineTo((i+1)*this.props.a, this.props.contentSize.height);
      let pathShape=(
        <ReactART.Shape
             d={path}
             key={i+'v'}
             strokeWidth={0.5}
             stroke='gray'/>
      )
      varray.push(pathShape)
    }
    let harray = [];
    let hcount = this.props.contentSize.height/this.props.a
    for (var i = 0; i < hcount-1; i++) {
      let path = ReactART.Path().moveTo(0,this.props.a * (i+1)).lineTo(this.props.contentSize.width,(i+1)*this.props.a, );
      let pathShape=(
        <ReactART.Shape
             d={path}
             key={i+'v'}
             strokeWidth={0.5}
             stroke='gray'/>
      )
      harray.push(pathShape)
    }
    return (
      <div style={containerStyle}>
        <ReactART.Surface width={this.props.contentSize.width} height={this.props.contentSize.height}>
          <ReactART.Group x={0} y={0}>
            {varray}
            {harray}
          </ReactART.Group>
        </ReactART.Surface>
      </div>
    )
  }
}

module.exports = GridBackGround
