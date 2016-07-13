import { combineReducers } from 'redux'

const initialState = { }

function googleMap(state = initialState, action) {
    console.log("googleMap", state, action)
    switch (action.type) {
    case 'GOOGLE_MAP.GOT_MAP':
        return Object.assign({}, state, {
            map: action.map,
            google: action.google
        })
    default:
        return state
    }
}

function places(state = initialState, action) {
    console.log("places", state, action)
    switch (action.type) {
    case 'PLACES.GOT_PLACES':
        return Object.assign({}, state, {
            places: action.places
        })
    default:
        return state
    }
}

let kelpAppReducers = combineReducers({
    googleMap,
    places
})


export default kelpAppReducers;