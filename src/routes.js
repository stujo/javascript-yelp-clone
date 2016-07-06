import React from 'react'
import { browserHistory, Router, Route, Redirect } from 'react-router'

import makeMainRoutes from './views/Main/routes'

const main = makeMainRoutes();

export const routeFactory = () => (
<Router>
  <Route path=''>
    { main }
  </Route>
</Router>
)

export default routeFactory