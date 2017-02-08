import { connect } from 'react-redux'
import { getXml, getXmlFailure, getXmlSuccess, sendXmlToServer } from './../actions/xml'
import Button from './../components/xmlGeneratorButton'

const mapDispatchToProps = (dispatch) => ({
  getXml () {
    dispatch(getXml())
    .then((response) => {
      if (response.error) {
        dispatch(getXmlFailure(response.payload))
      } else {
        dispatch(sendXmlToServer(response.payload))
        .then((response) => {
          if (response.error) {
            dispatch(getXmlFailure(response.payload))
          }
          dispatch(getXmlSuccess(response.payload))
        })
      }
    })
  }
})

module.exports = connect(null, mapDispatchToProps)(Button)
