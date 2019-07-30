import { all } from 'redux-saga/effects';
import { exampleSaga } from './exampleSaga';
import { userSaga } from './userSaga';

export default function* sagas() {
  yield all([...exampleSaga, ...userSaga]);
}
