import React, {
  Component
}
from 'react'
import dispatchActions from '../../actions/index'


class TextView extends Component {

  constructor(props)
  {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }

  onMouseOver()
  {
    // alert('mouseOver')
    // console.log('textmouseOver')
    let {componentIdentifier,dispatch} = this.props
    // dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_SELECT_COMPONENT',{identifier:componentIdentifier});
  }

  onMouseOut()
  {
    let {componentIdentifier,dispatch} = this.props
    // dispatchActions.componentEditorData.processAction(dispatch,'EDITOR_UN_SELECT_COMPONENT',{identifier:componentIdentifier});
  }

  render () {
    let {object,text, children,style,componentIdentifier,componentStatus,dispatch, ...props} = this.props
    if(style.marginRight === undefined)
    {
      style.marginRight='auto'
    }
    if(style.marginLeft === undefined)
    {
      style.marginLeft='auto'
    }
    if(componentStatus === 1)
    {
      style.borderColor = 'blue';
      style.borderWidth = '1px';
      style.borderStyle = 'solid';
    }
    return ( < div style={style} {...props} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}> {
        text
      } </div>)
    }
  }



  var textProps={
    text:{
      type:'string',
      name:"文本",
      defaut:'string'
    },
    style:{
      borderColor:{
        type:'string',
        title:"边框颜色",
        default:undefined
      },
      borderWidth:{
        type:'int',
        name:"边框宽度",
        default:undefined
      },
      borderTopWidth:{
        type:'int',
        name:"上边框宽度",
        default:undefined
      },
      borderTopColor:{
        type:'string',
        name:"上边框颜色",
        default:undefined
      },
      borderBottomWidth:{
        type:'int',
        name:"下边框宽度",
        default:undefined
      },
      borderBottomColor:{
        type:'string',
        name:"下边框颜色",
        default:undefined
      },
      borderRightWidth:{
        type:'int',
        name:"右边框宽度",
        default:undefined
      },
      borderRightColor:{
        type:'string',
        name:"右边框颜色",
        default:undefined
      },
      borderLeftWidth:{
        type:'int',
        name:"左边框宽度",
        default:undefined
      },
      borderLeftColor:{
        type:'string',
        name:"左边框颜色",
        default:undefined
      },
      marginTop:{
        type:"measurement",
        name:"上边距",
        default:0,
      },
      marginBottom:{
        type:"measurement",
        name:"下边距",
        default:0,
      },
      marginRight:{
        type:"measurement",
        title:"右边距",
        default:0,
      },
      marginLeft:{
        type:"measurement",
        title:"左边距",
        default:0,
      },
      fontSize:{
        type:"measurement",
        title:"字体大小",
        default:1,
      },
      color:{
        type:'string',
        name:"字体颜色",
        default:'black'
      }
    }
  }


  module.exports = TextView;
  // module.exports = TextView;
