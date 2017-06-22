import React, {
  Component
}
from 'react'


class TouchableOpacity extends Component {
  render () {
    let {object, children,style,componentIdentifier,componentStatus, ...props} = this.props
    style.display='flex'
    if(componentStatus === 1)
    {
      style.borderColor = 'blue';
      style.borderWidth = '1px';
      style.borderStyle = 'solid';
    }
    return ( < div style={style} {...props} > {
        children
      } </div>)
    }
  }

  module.exports = TouchableOpacity;
