import { connect } from 'react-redux'
import { getStations, getSupplierByIds, getClientIds, sendXmlToServer, getVehiclesByIds, getXmlFailure, getXmlSuccess } from './../actions/xml'
const jsonHelper = require('./../helpers/jsonHelper')
import Xml from './../components/xml'

const mapDispatchToProps = (dispatch) => ({
  createXmlFile (startingDate, endingDate) {
    var obj = {}
    dispatch(getStations())
    .then((response) => {
      if (response.error) {
        dispatch(getXmlFailure(response.payload.response.data))
      } else {
        obj.stations = response.payload.data
        dispatch(getSupplierByIds(obj.stations, startingDate, endingDate))
        .then((response) => {
          if (response.error) {
            dispatch(getXmlFailure(response.payload.response.data))
          } else {
            obj.supplies = response.payload.data
            dispatch(getVehiclesByIds(obj.supplies))
            .then((response) => {
              if (response.error) {
                dispatch(getXmlFailure(response.payload.response.data))
              } else {
                obj.vehicles = response.payload.data
                dispatch(getClientIds(obj.vehicles))
                .then((response) => {
                  if (response.error) {
                    dispatch(getXmlFailure(response.payload.response.data))
                  } else {
                    obj.clients = response.payload.data
                    var jsonToSend = jsonHelper.createJson(obj)
                    dispatch(sendXmlToServer(jsonToSend))
                    .then((response) => {
                      if (response.error) {
                        dispatch(getXmlFailure(response.payload.response.data))
                      } else {
                        window.open('/download')
                        dispatch(getXmlSuccess(response.payload))
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

module.exports = connect(null, mapDispatchToProps)(Xml)
