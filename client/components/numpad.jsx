const React = require('react')
const DefaultInput = require('./defaultInput')
const Number = require('./number')
import { Col } from 'react-bootstrap'
const { func } = React.PropTypes

const NumPad = React.createClass({
  propTypes: {
    onCloseEvent: func,
    onSendEvent: func
  },
  getInitialState () {
    return {
      pin: ''
    }
  },
  onPinChangeEvent (value) {
    this.setState({ pin: this.state.pin + value })
  },
  onDelClick () {
    this.setState({ pin: this.state.pin.slice(0, -1) })
  },
  onCloseEvent () {
    this.props.onCloseEvent()
  },
  onSendEvent () {
    this.props.onSendEvent()
  },
  render () {
    return (
      <div className='container'>
        <h3>Entrar PIN</h3>
        <DefaultInput title='Pin' placeholder='Entra seu codigo PIN' value={this.state.pin} onChange={this.onPinChangeEvent} />
        <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
          <div id='container'>
            <ul id='keyboard'>
              <Number classToUse='letter' number='1' onClick={this.onPinChangeEvent} />
              <Number classToUse='letter' number='2' onClick={this.onPinChangeEvent} />
              <Number classToUse='letter' number='3' onClick={this.onPinChangeEvent} />
              <Number classToUse='letter clearl' number='4' onClick={this.onPinChangeEvent} />
              <Number classToUse='letter' number='5' onClick={this.onPinChangeEvent} />
              <Number classToUse='letter' number='6' onClick={this.onPinChangeEvent} />
              <Number classToUse='letter clearl' number='7' onClick={this.onPinChangeEvent} />
              <Number classToUse='letter ' number='8' onClick={this.onPinChangeEvent} />
              <Number classToUse='letter' number='9' onClick={this.onPinChangeEvent} />
              <Number classToUse='letter zero clearl' number='0' onClick={this.onPinChangeEvent} />
              <li className='delete lastitem' onClick={this.onDelClick}>Del</li>
              <li className='letter zero clearl' onClick={this.onCloseEvent}>Fechar</li>
              <li className='delete lastitem' onClick={this.onSendEvent}>Enviar</li>
            </ul>
          </div>
        </Col>
      </div>
    )
  }
})

module.exports = NumPad
