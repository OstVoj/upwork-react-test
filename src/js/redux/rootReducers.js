import { combineReducers } from 'redux'
import example from './modules/example'
import user from './modules/user'

export default combineReducers({
  example,
  user,
})
