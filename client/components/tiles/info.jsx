const React = require('react')
const Box = require('./../input/box')
const Input = require('./../input/input')
const Button = require('./../buttons/button')
const { func, object, string, bool } = React.PropTypes

const InfoTile = React.createClass({
  propTypes: {
    vehicle: object,
    client: object,
    station: object,
    distance: string,
    onDistanceChange: func,
    onSelectChange: func,
    liters: string,
    isButtonDisabled: bool,
    onFormValidation: func,
    optionIndex: string
  },
  getInitialState () {
    return {
      options: []
    }
  },
  componentWillMount () {
    for (var i = 0; i < this.props.station.bombas.length; i++) {
      var key = i + 1
      var name = key.toString()

      var option
      if (name === this.props.optionIndex) {
        option = <p key={key.toString()} className='col s3 m3 l3'>
          <input name='group1' type='radio' id={name} onChange={this.onRadioClick} checked />
          <label htmlFor={name}>{this.props.station.bombas[i].idBomba}</label>
        </p>
      } else {
        option = <p key={key.toString()} className='col s3 m3 l3'>
          <input name='group1' type='radio' id={name} onChange={this.onRadioClick} />
          <label htmlFor={name}>{this.props.station.bombas[i].idBomba}</label>
        </p>
      }
      this.state.options.push(option)
    }
  },
  onRadioClick (e) {
    this.props.onSelectChange(e.target.id)
  },
  render () {
    return (
      <div>
        <div className='valign-wrapper row login-box'>
          <div className='col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4'>
            <form>
              <div className='card-content'>
                <span className='card-title'>Abastecimento</span>
                <div className='row'>
                  <Box
                    title='Nome'
                    value={this.props.client.nome}
                    />
                </div>
                <div className='row'>
                  <Box
                    title='Matricula'
                    value={this.props.vehicle.matricula}
                    />
                </div>
                <div className='row'>
                  <label htmlFor='text' className='active'>Bombas</label>
                  <div className='section'>
                    <div className='row'>
                      {this.state.options}
                    </div>
                  </div>
                  <div className='divider' />
                </div>
                <div className='row'>
                  <Box
                    title='Litros'
                    value={this.props.liters}
                    />
                </div>
                <div className='row'>
                  <Input
                    placeholder='km'
                    title='Quilometragem'
                    type='text'
                    value={this.props.distance}
                    onChange={this.props.onDistanceChange}
                    />
                </div>
                <div className='card-action right-align'>
                  <Button
                    class='button'
                    title='Enviar'
                    onSubmit={this.props.onFormValidation}
                    disabled={this.props.isButtonDisabled}
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

module.exports = InfoTile
