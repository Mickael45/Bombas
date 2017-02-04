const React = require('react')
const CodeBox = require('./../../defaultBox')
const NIFBox = require('./../../defaultBox')
const NIFCountryBox = require('./../../defaultBox')

const GasStationInfoTile = React.createClass({
  render () {
    return (
      <div>
        <h3>Estabelecimento</h3>
        <CodeBox title='Código do estabelecimento' value='978546311' />
        <NIFBox title='NIF do estabelecimento' value='faf79f48af9f4a9f4af9' />
        <NIFCountryBox title='País emissor do NIF' value='Portugal' />
      </div>
    )
  }
})

module.exports = GasStationInfoTile
