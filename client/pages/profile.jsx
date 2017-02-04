const React = require('react')
const ProfileComp = require('./../components/profile/profile')

const createObject = () => (
  {
    registrationNumber: '78-KB-84',
    registrationCountry: 'Portugal',
    NFCCardNumber: '78456123',
    gasType: 'Gasoléo',
    maxWeightCapacity: 900
  }
)

const Profile = React.createClass({
  getInitialState () {
    return {
      data: createObject()
    }
  },
  render () {
    return (
      <ProfileComp data={this.state.data} />
    )
  }
})

module.exports = Profile
