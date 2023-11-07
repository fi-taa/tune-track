//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureAppStore from './store/configureStore';
import SongList from './redux/songList/index';
import './index.css';

const store = configureAppStore();

const App = () => {
  return (
    <Provider store={store}>
      <SongList />
    </Provider>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<App />, rootElement);
}