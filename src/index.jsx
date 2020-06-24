import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/defaults.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/search';
import rootSaga from './sagas/search';
import App from './components/app/app';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    // eslint-disable-next-line
    document.getElementById('root')
  );
}

sagaMiddleware.run(rootSaga);

render();
store.subscribe(render);
