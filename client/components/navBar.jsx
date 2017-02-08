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
              <a className='navBar-title'>React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {
              (this.props.status === 'authenticated'
              ? <Nav pullRight>
                <NavItem onClick={this.props.logout} className='navBar-link'>Sair</NavItem>
              </Nav>
            : this.props.status === 'not subscribed'
            ? <Nav pullRight>
              <NavItem onClick={this.props.toSignInStatus} className='navBar-link'>Entrar</NavItem>
            </Nav>
            : this.props.status === 'not authenticated'
            ? <Nav pullRight>
              <NavItem onClick={this.props.toSignUpStatus} className='navBar-link'>Registar</NavItem>
            </Nav>
            : <Nav />)
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
})

module.exports = NavBar
