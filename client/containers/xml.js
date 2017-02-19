import { connect } from 'react-redux'
const actions = require('./../actions/xml/xml')
const jsonHelper = require('./../helpers/jsonHelper')
import Xml from './../components/xml'

const mapDispatchToProps = (dispatch) => ({
  createXmlFile (startingDate, endingDate) {
    var obj = {}
    dispatch(actions.getStations())
    .then((response) => {
      if (response.error) {
        dispatch(actions.getXmlFailure(response.payload.response.data))
      } else {
        obj.stations = response.payload.data
        dispatch(actions.getPumpsByIds())
        .then((response) => {
          if (response.error) {
            dispatch(actions.getXmlFailure(response.payload.response.data))
          } else {
            obj.bombas = response.payload.data
            dispatch(actions.getSuppliesByIds(obj.bombas, startingDate, endingDate))
            .then((response) => {
              if (response.error) {
                dispatch(actions.getXmlFailure(response.payload.response.data))
              } else {
                obj.supplies = response.payload.data
                dispatch(actions.getVehiclesByIds(obj.supplies))
                .then((response) => {
                  if (response.error) {
                    dispatch(actions.getXmlFailure(response.payload.response.data))
                  } else {
                    obj.vehicles = response.payload.data
                    dispatch(actions.getClientIds(obj.vehicles))
                    .then((response) => {
                      if (response.error) {
                        dispatch(actions.getXmlFailure(response.payload.response.data))
                      } else {
                        obj.clients = response.payload.data
                        var jsonToSend = jsonHelper.createJson(obj)
                        dispatch(actions.sendXmlToServer(jsonToSend))
                        .then((response) => {
                          if (response.error) {
                            dispatch(actions.getXmlFailure(response.payload.response.data))
                          } else {
                            window.open('/download')
                            dispatch(actions.getXmlSuccess(response.payload))
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  },
  resetError () {
    dispatch(actions.resetError())
  }
})

const mapStateToProps = (state) => {
  return {
    error: state.xmlReducer.error
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Xml)
