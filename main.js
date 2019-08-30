import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Text from './Text'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

let serverResponse = ['It', 'is', 'redux', 'saga', 'test.'];

function addText(text) {
  return {
    type: 'SHOW_TEXT',
    text
  }
}

function App() {
  return (
    <div>
      <Text
        text={store.getState().text}
        store={store}
        sr={serverResponse}
        fn={addText}
      />
      <div className={store.getState().spinner}></div>
    </div>
  )
}

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
