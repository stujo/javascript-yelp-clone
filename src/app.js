import React from 'react'
import ReactDOM from 'react-dom'

import 'font-awesome/css/font-awesome.css'

// Uses webpack css alias for styles
import 'css/app.css'

import App from 'containers/App/App'

const mountNode = document.querySelector('#root');
ReactDOM.render(<App/>, mountNode);
