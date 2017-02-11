const React = require('react')
const DefaultInput = require('./defaultInput')
const Number = require('./number')
import { Col } from 'react-bootstrap'
const { func, string } = React.PropTypes

const NumPad = React.createClass({
  propTypes: {
    onCloseEvent: func,
    onSendEvent: func,
    onPinChangeEvent: func,
    onPinDelChangeEvent: func,
    value: string
  },
  render () {
    return (
      <div className='container'>
        <h3>Entrar PIN</h3>
        <DefaultInput title='Pin' type='text' placeholder='Entra seu codigo PIN' value={this.props.value} onChange={this.props.onPinChangeEvent} />
        <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
          <div id='container'>
            <ul id='keyboard'>
              <Number classToUse='letter' number='1' onClick={this.props.onPinChangeEvent} />
              <Number classToUse='letter' number='2' onClick={this.props.onPinChangeEvent} />
              <Number classToUse='letter' number='3' onClick={this.props.onPinChangeEvent} />
              <Number classToUse='letter clearl' number='4' onClick={this.props.onPinChangeEvent} />
              <Number classToUse='letter' number='5' onClick={this.props.onPinChangeEvent} />
              <Number classToUse='letter' number='6' onClick={this.props.onPinChangeEvent} />
              <Number classToUse='letter clearl' number='7' onClick={this.props.onPinChangeEvent} />
              <Number classToUse='letter ' number='8' onClick={this.props.onPinChangeEvent} />
              <Number classToUse='letter' number='9' onClick={this.props.onPinChangeEvent} />
              <Number classToUse='letter zero clearl' number='0' onClick={this.props.onPinChangeEvent} />
              <li className='delete lastitem' onClick={this.props.onPinDelChangeEvent}>Del</li>
              <li className='letter zero clearl' onClick={this.props.onCloseEvent}>Fechar</li>
              <li className='delete lastitem' onClick={this.props.onSendEvent}>Enviar</li>
            </ul>
          </div>
        </Col>
      </div>
    )
  }
})

module.exports = NumPad
