import React from 'react'
import ReactDOM from 'react-dom'

import { browserHistory, Router, Route, Redirect } from 'react-router'

import 'font-awesome/css/font-awesome.css'

// Uses webpack css alias for styles
import 'css/app.css'

import App from 'containers/App/App'
import Home from 'components/Home/Home'

const routes = (
<Router>
  <Route path="/" component={ Home } />
  <Redirect from="*" to="/" />
</Router>
)

const mountNode = document.querySelector('#root');

ReactDOM.render(
    <App history={ browserHistory } routes={ routes } />,
    mountNode
);
