import Vue from 'vue'
import { session } from '../handler/login'

export function ChatMiddleware(to, from, next) {
  let auth = session.get()
  if (!('email' in auth)) {
    Vue.GoogleAuth.then(auth2 => {
      if (auth2.isSignedIn.get()) {
        const profile = auth2.currentUser.get().getBasicProfile()
        session.save(profile)
        return next()
      }
      return next('/login')
    })
  }
  return next()
}

export function LoginMiddleware(to, from, next) {
  let auth = session.get()
  if ('email' in auth) {
    Vue.GoogleAuth.then(auth2 => {
      if (auth2.isSignedIn.get()) {
        return next('/')
      }
      return next()
    })
  }
  return next()
}