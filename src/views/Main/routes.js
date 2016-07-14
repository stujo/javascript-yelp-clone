import React from 'react'
import { Route } from 'react-router'
import MainContainer from './MainContainer'
import Map from 'components/Map/Map'
import PlaceContainer from 'containers/PlaceContainer/PlaceContainer'

const ROOT_PATH = "/"

export const routes = {
    path: ROOT_PATH,
    component: MainContainer,
    childRoutes: [
        {
            path: 'map',
            component: Map
        },
        {
            path: 'detail/:placeId',
            component: PlaceContainer
        }
    ]
};


// export const routes = (
// <Route path="/" component={ MainContainer }>
//   <Route path="map1" component={ Map } />
// </Route>
// )

export default routes;