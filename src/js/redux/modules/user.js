import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const GET_USERS = 'GET_USERS'
const UPDATE_USERS = 'UPDATE_USERS'
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'

export const constants = {
  GET_USERS,
  UPDATE_USERS,
  UPDATE_USER_STATUS,
}

// ------------------------------------
// Actions
// ------------------------------------
export const getUsers = createAction(GET_USERS, () => ({}))
export const updateUsers = createAction(
  UPDATE_USERS,
  (users) => ({ users })
)
export const changeStatus = createAction(UPDATE_USER_STATUS, (userInfo) => ({ userInfo }))

export const actions = {
  getUsers,
  updateUsers,
  changeStatus,
}

export const reducers = {
  [UPDATE_USERS]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  users: '',
})

export default handleActions(reducers, initialState())
