import React from 'react'
import ReactDOM from 'react-dom'

import { browserHistory, Router, Route, Redirect } from 'react-router'

import 'font-awesome/css/font-awesome.css'
import 'normalize.css/normalize.css'

// Uses webpack css alias for styles
import 'css/app.css'

import routes from './routes'

const mountNode = document.querySelector('#root');

ReactDOM.render(
    <Router routes={ routes } history={ browserHistory } />,
    mountNode
);
