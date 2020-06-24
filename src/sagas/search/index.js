import { call, put, all, debounce } from 'redux-saga/effects';
import api from '../../api';

function* fetchData(action) {
  yield put({
    type: `SET_LOADING`
  });
  const response = yield call(api.get, `?query=${action.payload}`);
  yield put({
    type: `SET_SEARCH_RESULTS`,
    payload: response.data.data
  });
}

function* debounceRequests() {
  yield debounce(400, `SEARCH`, fetchData);
}

export default function* rootSaga() {
  yield all([debounceRequests()]);
}
