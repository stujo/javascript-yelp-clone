import React from 'react'

import PageNotFound from 'components/PageNotFound/PageNotFound'

import { routes as mainRoutes } from 'views/Main/routes'


// Using PlainRoute https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute
const routes = {
    childRoutes: [
        mainRoutes,
        {
            path: '*',
            component: PageNotFound
        }
    ]
}

export default routes
