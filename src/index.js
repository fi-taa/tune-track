import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import SongList from './features/songList/SongList';
import './index.css'
const App = () => {
  return (
    <Provider store={store}>
      <SongList />
    </Provider>
  );
};

// Replace the following line
// ReactDOM.render(<App />, document.getElementById('root'));

// With this line
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
