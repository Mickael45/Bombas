const React = require('react')
const CodeBox = require('./CodeBox/CodeBox')
const NIFBox = require('./NIFBox/NIFBox')
const NIFCountryBox = require('./NIFCountryBox/NIFCountryBox')

const GasStationInfoTile = React.createClass({
  render () {
    return (
      <div>
        <CodeBox />
        <NIFBox />
        <NIFCountryBox />
      </div>
    )
  }
})

module.exports = GasStationInfoTile
