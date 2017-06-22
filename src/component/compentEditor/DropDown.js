import React,{
  Component
} from 'react'
import { Menu, Dropdown, Button, Icon, message } from 'antd';

export default class DropDown extends Component{
  constructor(props)
  {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.state = {
      selectedKey:undefined
    }
  }
  handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  handleMenuClick(e) {
    // message.info('Click on menu item.');
    console.log('click', e);
    this.setState({
      selectedKey:e.key
    })
    if(this.props.onSelect)
    {
      this.props.onSelect(e.key)
    }
  }
  render()
  {
    let menu = (
      <Menu onClick={this.handleMenuClick}>
        {this._renderMenu()}
      </Menu>
    );
    return (
      <div>
        <Dropdown.Button overlay={menu}>
          {this.props.value?this.props.value:''}
        </Dropdown.Button>
      </div>
    )
  }

  _renderMenu()
  {
    let items = [];
    for (let i = 0; i < this.props.menus.length; i++) {
      let menu = this.props.menus[i]
      items.push(
        <Menu.Item key={menu}>{menu}</Menu.Item>
      )
    }
    return items
  }
}
