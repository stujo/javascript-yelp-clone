import React from 'react'
import { browserHistory, Router, Route, Redirect } from 'react-router'

import Home from 'components/Home/Home'

export const routeFactory = () => (
<Router>
  <Route path="/" component={ Home } />
  <Redirect from="*" to="/" />
</Router>
)

export default routeFactory
