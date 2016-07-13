import { combineReducers } from 'redux'

const initialGoogleMap = {
}

function googleMap(state = initialGoogleMap, action) {
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

const initialPlaces = {
    places: undefined
}

function places(state = initialPlaces, action) {
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

const initialPlaceDetail = {
    loading: true,
    placeId: null,
    place: null
}

function placeDetail(state = initialPlaceDetail, action) {
    console.log("placeDetail", state, action)
    switch (action.type) {
    case 'PLACE_DETAIL.LOADING':
        return Object.assign({}, state, {
            place: null,
            placeId: action.placeId,
            loading: true
        })
    case 'PLACE_DETAIL.GOT_PLACE':
        if (state.placeId === action.placeId) {
            return Object.assign({}, state, {
                place: action.place,
                loading: false
            })
        } else {
            console.error("Loaded " + action.placeId + " but was expecting " + state.placeId)
            return state;
        }
    default:
        return state
    }
}

let kelpAppReducers = combineReducers({
    googleMap,
    places,
    placeDetail
})


export default kelpAppReducers;