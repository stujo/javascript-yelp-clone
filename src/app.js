import React from 'react'
import ReactDOM from 'react-dom'

window.React = React;

// TODO LATER
//import { syncHistoryWithStore } from 'react-router-redux'

import { createStore } from 'redux'

import { browserHistory, Router, Route, Redirect } from 'react-router'

import 'font-awesome/css/font-awesome.css'
import 'normalize.css/normalize.css'

// Uses webpack css alias for styles
import 'css/app.css'

import routes from './routes'

import kelpAppReducers from './reducers'

// Dan Abramov calls this  'Provider' : https://www.youtube.com/watch?v=VJ38wSFbM3A
import StoreContextProvider from 'components/StoreContextProvider/StoreContextProvider'

const mountNode = document.querySelector('#root');

const store = createStore(kelpAppReducers)

console.log("STORE")
window.store = store;

// TODO LATER
// const history = syncHistoryWithStore(browserHistory, store)

function render() {
    ReactDOM.render(
        <StoreContextProvider store={ store }>
          <Router routes={ routes } history={ browserHistory } />
        </StoreContextProvider>,
        mountNode
    );
}

render()
store.subscribe(render)
