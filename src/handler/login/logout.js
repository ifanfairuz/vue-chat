import Vue from 'vue'
import { resetSession } from './session'

export function logout(callback = false) {
  Vue.GoogleAuth.then(auth2 => {
    auth2.signOut().then(() => {
      resetSession()
      if (callback) callback()
    })
  })
}

export default logout