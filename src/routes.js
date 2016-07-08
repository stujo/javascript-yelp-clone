import React from 'react'

import PageNotFound from 'components/PageNotFound/PageNotFound'

import { routes as mainRoutes } from 'views/Main/routes'

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
