const React = require('react')
const { string } = React.PropTypes
import { Modal, Button } from 'react-bootstrap'

const AlertTile = React.createClass({
  propTypes: {
    title: string,
    body: string
  },
  getInitialState () {
    return {
      isVisible: true
    }
  },
  onButtonClickEvent () {
    this.setState({ isVisible: false })
  },
  render () {
    return (
      <div className='static-modal'>
        {
          (this.state.isVisible)
          ? <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.body}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.onButtonClickEvent}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
          : <div />
        }
      </div>
    )
  }
})

module.exports = AlertTile
