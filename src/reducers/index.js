import { combineReducers } from 'redux'

import debugHelper from './debugHelper'
import logging from './logging'

import googleMap from './googleMap'
import places from './places'
import place from './place'



let kelpAppReducers = combineReducers({
    debugHelper,
    //    logging,
    googleMap,
    places,
    place,
})


export default kelpAppReducers;