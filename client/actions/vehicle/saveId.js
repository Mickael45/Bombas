const strings = require('./../constants/vehicle')

export function saveId (vehicleId) {
  return {
    type: strings.SAVE_ID,
    payload: vehicleId
  }
}
