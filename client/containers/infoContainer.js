import { connect } from 'react-redux'
import { getInfo, getInfoSuccess, getInfoFailure, sendInfo, sendInfoSuccess, sendInfoFailure } from './../actions/info'
import Profile from './../components/profile/profile'

const mapDispatchToProps = (dispatch) => ({
  getInfo () {
    dispatch(getInfo())
    .then((response) => {
      if (response.error) {
        dispatch(getInfoFailure(response.payload))
      } else {
        dispatch(getInfoSuccess(response.payload))
      }
    })
  },
  sendInfo (distance) {
    dispatch(sendInfo(distance))
    .then((response) => {
      if (response.error) {
        dispatch(sendInfoSuccess(response.payload))
      } else {
        dispatch(sendInfoFailure(response.payload))
      }
    })
  }
})

const mapStateToProps = (state) => {
  return {
    data: state.infoReducer.data,
    status: state.infoReducer.status
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Profile)
