const React = require('react')
const { Navbar, Nav, NavItem } = require('react-bootstrap')
const { func, string } = React.PropTypes

const NavBar = React.createClass({
  propTypes: {
    logout: func,
    status: string,
    toSignInStatus: func,
    toSignUpStatus: func
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
          {
            (this.props.status === 'authenticated'
            ? <Nav pullRight>
              <NavItem onClick={this.props.logout}>Sair</NavItem>
            </Nav>
          : this.props.status === 'not subscribed'
          ? <Nav pullRight>
            <NavItem onClick={this.props.toSignInStatus}>Entrar</NavItem>
          </Nav>
          : this.props.status === 'not authenticated'
          ? <Nav pullRight>
            <NavItem onClick={this.props.toSignUpStatus}>Registar</NavItem>
          </Nav>
          : <Nav />)
          }
        </Navbar>
      </div>
    )
  }
})

module.exports = NavBar
