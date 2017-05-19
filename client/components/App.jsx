import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './../reducers';
import rtcSaga from './../Sagas/'
import VideoEndpoint from './../VideoEndpoint.jsx';

const defaultState = { endpoints: [] };
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  defaultState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rtcSaga);

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <div style={{ textAlign: 'center' }}>
          <h1>WebRTC</h1>
          <VideoEndpoint />
        </div>
      </Provider>
    );
  }
}
export default App;
