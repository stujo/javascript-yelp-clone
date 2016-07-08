import React from 'react'
import { Route } from 'react-router'
import MainContainer from './MainContainer'
import Map from './Map/Map'
import PlaceDetail from './PlaceDetail/PlaceDetail'

export const routes = {
    path: '/',
    component: MainContainer,
    childRoutes: [
        {
            path: 'map',
            component: Map
        },
        {
            path: 'detail/:placeId',
            component: PlaceDetail
        }
    ]
};


// export const routes = (
// <Route path="/" component={ MainContainer }>
//   <Route path="map1" component={ Map } />
// </Route>
// )

export default routes;