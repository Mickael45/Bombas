const React = require('react')
const { Navbar } = require('react-bootstrap')

const NavBar = () => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a>React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  </div>
)

module.exports = NavBar
