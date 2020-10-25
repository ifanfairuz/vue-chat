import { session } from '../handler/login'

export default {
  getters: {
    auth: () => session.get()
  },
  state: {
    a: 'a'
  },
}