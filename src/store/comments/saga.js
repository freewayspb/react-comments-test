import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./action";
import axios from "axios";

/* load all policies */
const onLoadAll = async () => axios.get('http://localhost:3000/comments');

function* getComments() {
  try {
    const comments = yield call(onLoadAll);
    if (comments) {
      yield put(actions.getCommentsSuccess(comments.data.list));
    } else {
      yield put(actions.getCommentsError());
    }
  } catch (error) {
    yield put(actions.getCommentsError());
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD_COMMENTS, getComments)
  ]);
}
