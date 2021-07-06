import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Operation } from "./reducers/data/slice.js"
import { MovieCategory, Language } from "./api.js"
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

store.dispatch(Operation.fetchMovies({ category: MovieCategory.UPCOMING, language: Language.ENG, page: 2 }))
store.dispatch(Operation.fetchGenresList())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
