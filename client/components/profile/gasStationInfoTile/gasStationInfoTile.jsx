const React = require('react')
const GasStationCodeBox = require('./gasStationCodeBox/gasStationCodeBox')
const GasStationNIFBox = require('./gasStationNIFBox/gasStationNIFBox')

const GasStationInfoTile = React.createClass({
  render () {
    return (
      <div>
        <GasStationCodeBox />
        <GasStationNIFBox />
      </div>
    )
  }
})

module.exports = GasStationInfoTile
