import React, {Component} from "react";

class ContainerView extends Component {
  render() {
    let {
        object,
        children,
        style,
        componentIdentifier,
        componentStatus,
        ...props
    } = this.props;
    style.display = 'flex';
    if (componentStatus === 1) {
      style.borderColor = 'blue';
      style.borderWidth = '1px';
      style.borderStyle = 'solid';
    } else if (style.borderColor && style.borderWidth) {
      style.borderStyle = 'solid';
    }
    return (
        <div style={style} {...props} >
          {children}
        </div>
    )
  }
}



module.exports = ContainerView;
