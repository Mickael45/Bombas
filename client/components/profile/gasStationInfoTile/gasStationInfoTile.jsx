const React = require('react')
const DefaultBox = require('./../../defaultBox')
const { string } = React.PropTypes

const GasStationInfoTile = React.createClass({
  propTypes: {
    code: string,
    NIF: string,
    country: string
  },
  render () {
    return (
      <div>
        <h3>Estabelecimento</h3>
        <DefaultBox
          title='Código do estabelecimento'
          value={this.props.code} />
        <DefaultBox
          title='NIF do estabelecimento'
          value={this.props.NIF} />
        <DefaultBox
          title='País emissor do NIF'
          value={this.props.country} />
      </div>
    )
  }
})

module.exports = GasStationInfoTile
