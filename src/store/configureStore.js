import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import songListReducer from '../redux/songList/reducers';
import rootSaga from '../sagas';

export default function configureAppStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

  const reducer = combineReducers({
    songList: songListReducer,
    // Add other reducers if needed
  });

  const store = configureStore({
    reducer,
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
