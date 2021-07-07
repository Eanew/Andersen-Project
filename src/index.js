import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Operation, OperationType as Type } from "./reducers/data/slice.js"
import { MovieCategory } from "./api.js"
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

store.dispatch(Operation[Type.LOAD_MOVIES_BY_CATEGORY]({ category: MovieCategory.POPULAR }))
store.dispatch(Operation[Type.LOAD_GENRES_LIST]())
// store.dispatch(Operation[Type.LOAD_MOVIE_BY_ID]({ id: 337404 }))
// store.dispatch(Operation[Type.LOAD_MOVIES_BY_TITLE]({ title: `A`, options: { primaryReleaseYear: 2017 } }))

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
