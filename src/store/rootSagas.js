import { all } from 'redux-saga/effects';
import comments from './comments/saga';

export default function* rootSaga() {
  yield all([
    comments()
  ]);
}
