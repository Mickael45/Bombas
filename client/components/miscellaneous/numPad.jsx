const React = require('react')
const Box = require('./../input/box')
const Number = require('./number')
const Button = require('./../buttons/button')
const { func, string, bool } = React.PropTypes

const NumPad = React.createClass({
  propTypes: {
    onCloseEvent: func,
    onSendEvent: func,
    onPinChangeEvent: func,
    onPinDelChangeEvent: func,
    value: string,
    isPinValidationButtonDisabled: bool
  },
  render () {
    return (
      <div>
        <div className='valign-wrapper row login-box'>
          <div className='col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4'>
            <form>
              <div className='card-content'>
                <span className='card-title'>Confirmar</span>
                <Box
                  title='Pin'
                  value={this.props.value}
                  />
                <div className='row center-align'>
                  <ul id='keyboard'>
                    <div className='row'>
                      <div className='but col s4 m4 l4'>
                        <Number classToUse='letter' number='1' onClick={this.props.onPinChangeEvent} />
                      </div>
                      <div className='but col s4 m4 l4'>
                        <Number classToUse='letter' number='2' onClick={this.props.onPinChangeEvent} />
                      </div>
                      <div className='but col s4 m4 l4'>
                        <Number classToUse='letter' number='3' onClick={this.props.onPinChangeEvent} />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='but col s4 m4 l4'>
                        <Number classToUse='letter clearl' number='4' onClick={this.props.onPinChangeEvent} />
                      </div>
                      <div className='but col s4 m4 l4'>
                        <Number classToUse='letter' number='5' onClick={this.props.onPinChangeEvent} />
                      </div>
                      <div className='but col s4 m4 l4'>
                        <Number classToUse='letter' number='6' onClick={this.props.onPinChangeEvent} />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='but col s4 m4 l4'>
                        <Number classToUse='letter clearl' number='7' onClick={this.props.onPinChangeEvent} />
                      </div>
                      <div className='but col s4 m4 l4'>
                        <Number classToUse='letter ' number='8' onClick={this.props.onPinChangeEvent} />
                      </div>
                      <div className='but col s4 m4 l4'>
                        <Number classToUse='letter' number='9' onClick={this.props.onPinChangeEvent} />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='but col s6 m6 l6'>
                        <Number classToUse='letter zero clearl' number='0' onClick={this.props.onPinChangeEvent} />
                      </div>
                      <div className='but col s6 m6 l6'>
                        <li className='delete lastitem' onClick={this.props.onPinDelChangeEvent}>C</li>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className='card-action'>
                  <Button
                    class='button'
                    title='Fechar'
                    onSubmit={this.props.onCloseEvent}
                     />
                  <Button
                    class='button'
                    title='Enviar'
                    onSubmit={this.props.onSendEvent}
                    disabled={this.props.isPinValidationButtonDisabled}
                   />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
})

/* <Number classToUse='letter' number='1' onClick={this.props.onPinChangeEvent} />
<Number classToUse='letter' number='2' onClick={this.props.onPinChangeEvent} />
<Number classToUse='letter' number='3' onClick={this.props.onPinChangeEvent} />
<Number classToUse='letter clearl' number='4' onClick={this.props.onPinChangeEvent} />
<Number classToUse='letter' number='5' onClick={this.props.onPinChangeEvent} />
<Number classToUse='letter' number='6' onClick={this.props.onPinChangeEvent} />
<Number classToUse='letter clearl' number='7' onClick={this.props.onPinChangeEvent} />
<Number classToUse='letter ' number='8' onClick={this.props.onPinChangeEvent} />
<Number classToUse='letter' number='9' onClick={this.props.onPinChangeEvent} /> */

module.exports = NumPad
