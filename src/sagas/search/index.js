import { call, put, all, debounce } from 'redux-saga/effects';
import api from '../../api';

function* fetchData(action) {
  yield put({
    type: `SET_LOADING`
  });
  const response = yield call(api.get, `?query=${action.payload}`);
  const result = response.data.data;
  yield put({
    type: `SET_SEARCH_RESULTS`,
    payload: result
  });
  yield put({
    type: `SET_LAST_REQUEST`,
    payload: action.payload
  });
  if (
    !(result.tours.length || result.cities.length || result.attractions.length)
  )
    yield put({
      type: `SET_NOT_FOUND`
    });
}

function* debounceRequests() {
  yield debounce(400, `SEARCH`, fetchData);
}

export default function* rootSaga() {
  yield all([debounceRequests()]);
}
