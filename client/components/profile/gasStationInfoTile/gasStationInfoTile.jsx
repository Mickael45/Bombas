const React = require('react')
const GasStationCodeBox = require('./gasStationCodeBox/gasStationCodeBox')
const GasStationNIFBox = require('./gasStationNIFBox/gasStationNIFBox')
const GasStationNIFCountryBox = require('./gasStationNIFCountryBox/gasStationNIFCountryBox')

const GasStationInfoTile = React.createClass({
  render () {
    return (
      <div>
        <GasStationCodeBox />
        <GasStationNIFBox />
        <GasStationNIFCountryBox />
      </div>
    )
  }
})

module.exports = GasStationInfoTile
