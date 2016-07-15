import React from 'react'
import { Route } from 'react-router'
import HomeContainer from 'containers/HomeContainer/HomeContainer'
import PlaceContainer from 'containers/PlaceContainer/PlaceContainer'
import MapContainer from 'containers/MapContainer/MapContainer'

const ROOT_PATH = "/"

export const homeRoutes = {
    path: ROOT_PATH,
    component: HomeContainer,
    childRoutes: [
        {
            path: 'map',
            component: MapContainer
        },
        {
            path: 'detail/:placeId',
            component: PlaceContainer
        }
    ]
};

export default homeRoutes;