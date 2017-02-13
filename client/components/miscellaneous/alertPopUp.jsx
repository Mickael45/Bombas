const React = require('react')
const { string, func } = React.PropTypes
import { Modal, Button } from 'react-bootstrap'

const GenericAlertPopUp = React.createClass({
  propTypes: {
    title: string,
    body: string,
    onClick: func
  },
  getInitialState () {
    return {
      isVisible: true
    }
  },
  onButtonClickEvent () {
    this.setState({ isVisible: false })
    if (this.props.onClick) {
      this.props.onClick()
    }
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

module.exports = GenericAlertPopUp
