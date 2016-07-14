import React from 'react'

import PageNotFound from 'components/PageNotFound/PageNotFound'

import { homeRoutes } from './home'


// Using PlainRoute https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute
const routes = {
    childRoutes: [
        homeRoutes,
        {
            path: '*',
            component: PageNotFound
        }
    ]
}

export default routes
