import { all } from 'redux-saga/effects';
import { watchFetchSongs } from '../redux/songList/sagas';

export default function* rootSaga() {
  yield all([watchFetchSongs()]);
}
