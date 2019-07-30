import {
  call, put, fork, takeLatest,
} from 'redux-saga/effects'
import {
  constants as userConstants,
  actions as userActions,
} from '../modules/user'
import {
  getUsers,
  changeUserStatus,
} from '../../common/api'

export function* fetchUsers() {
  const response = yield call(getUsers)
  if (response.status === 200) {
    yield put(userActions.updateUsers(response.data))
  } else {
    yield put(userActions.updateUsers(null))
  }
}

export function* updateUserStatus(action) {
  const { userInfo } = action.payload
  const response = yield call(changeUserStatus, userInfo)
  if (response.status === 200) {
    yield put(userActions.getUsers())
  }
}

function* watchUsers() {
  yield takeLatest(userConstants.GET_USERS, fetchUsers)
  yield takeLatest(userConstants.UPDATE_USER_STATUS, updateUserStatus)
}

export const userSaga = [fork(watchUsers)]
