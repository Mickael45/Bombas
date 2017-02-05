const React = require('react')
const { Navbar, Nav, NavItem } = require('react-bootstrap')
const { func } = React.PropTypes

const NavBar = React.createClass({
  propTypes: {
    logout: func
  },
  render () {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a>React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem onClick={this.props.logout}>Logout</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
})

module.exports = NavBar
