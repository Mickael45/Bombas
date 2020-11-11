import { logout } from './../constants/auth'

export function logoutUser () {
  return {
    type: logout.RESET_DATA
  }
}
