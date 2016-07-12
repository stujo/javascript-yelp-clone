import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import { browserHistory, Router, Route, Redirect } from 'react-router'

import 'font-awesome/css/font-awesome.css'
import 'normalize.css/normalize.css'

// Uses webpack css alias for styles
import 'css/app.css'

import routes from './routes'

import stateStore from './reducers'

import StoreContextProvider from 'components/StoreContextProvider/StoreContextProvider'

const mountNode = document.querySelector('#root');

const store = createStore(stateStore)

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
