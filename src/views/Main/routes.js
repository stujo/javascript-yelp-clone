import React from 'react'
import { Route } from 'react-router'
import MainContainer from './MainContainer'
import Map from './Map/Map'


export const makeMainRoutes = () => {

    return (
        <Route path="/" component={ MainContainer }>
          <Route path="map" component={ Map } />
        </Route>
    )
}

export default makeMainRoutes;