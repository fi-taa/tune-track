// sagas.js
import { put, takeLatest } from 'redux-saga/effects';
import { fetchSongs, displaySong } from './actions'; // Make sure the path to actions is correct

function* fetchSongsAsync() {
    try {
      const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = yield response.json();
      yield put(displaySong(json));
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  }
  

export function* watchFetchSongs() {
  yield takeLatest(fetchSongs.type, fetchSongsAsync); // Use fetchSongs.type instead of string
}
