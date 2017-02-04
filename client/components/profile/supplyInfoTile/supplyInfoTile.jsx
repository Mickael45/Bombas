const React = require('react')
const DateAndTimeBox = require('./dateAndTimebox/dateAndTimebox')

const SupplyInfoTile = React.createClass({
  render () {
    return (
      <div>
        <DateAndTimeBox />
      </div>
    )
  }
})

module.exports = SupplyInfoTile
