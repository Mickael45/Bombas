const React = require('react')
const GasStationCodeBox = require('./gasStationCodeBox/gasStationCodeBox')

const GasStationInfoTile = React.createClass({
  render () {
    return (
      <GasStationCodeBox />
    )
  }
})

module.exports = GasStationInfoTile
