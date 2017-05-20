import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import styled, { injectGlobal } from 'styled-components';

import reducer from './../reducers';
import rtcSaga from './../Sagas/';
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
injectGlobal`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Helvetica', sans-serif;
    box-sizing: border-box;
  }
  * {
   box-sizing: inherit;
   font-family: inherit;
  }
  .cam-enter {
    opacity: 0.01;
  }
  .cam-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
`;
const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

const Title = styled.h1`
  color:white;
`;

const Nav = styled.header`
  width: 100%;
  heigth: 2rem;
  background-color:#0091EA;
  text-align: center;
`;

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <Nav>
            <Title>WebRTC</Title>
          </Nav>
          <VideoEndpoint />
        </AppContainer>
      </Provider>
    );
  }
}
export default App;
