import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Link to="/">
          <Menu.Item
            name='users'
            active={activeItem === 'users'}
            onClick={this.handleItemClick}
          >
            Users
          </Menu.Item>
        </Link>

        <Link to="/doctors">
          <Menu.Item
            name='doctors'
            active={activeItem === 'doctors'}
            onClick={this.handleItemClick}
          >
            Doctors
          </Menu.Item>
        </Link>

        <Link to="/appointments">
          <Menu.Item
            name='appointments'
            active={activeItem === 'appointments'}
            onClick={this.handleItemClick}
          >
            Appointments
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}

export default Navbar;