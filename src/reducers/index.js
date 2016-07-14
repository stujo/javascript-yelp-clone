import { combineReducers } from 'redux'

const initialLogging = {
    errors: [],
    logs: []
}

function addLogEvent(container, event) {
    return container.concat([event])
}

function logging(state = initialLogging, action) {
    switch (action.type) {
    case 'LOGGING.ERROR':
        return Object.assign({}, state, {
            logs: state.logs,
            errors: addLogEvent(state.errors, action)
        })
    case 'LOGGING.LOG':
        return Object.assign({}, state, {
            errors: state.errors,
            logs: addLogEvent(state.logs, action)
        })
    default:
        return state
    }
}

const initialGoogleMap = {
}

function googleMap(state = initialGoogleMap, action) {
    switch (action.type) {
    case 'MAP.READY':
        return Object.assign({}, state, {
            map: action.map,
            google: action.google
        })
    default:
        return state
    }
}

const initialPlaces = {
    loading: false,
    places: undefined
}

function places(state = initialPlaces, action) {
    switch (action.type) {
    case 'PLACES.LOADING':
        return {
            loading: true,
            places: undefined
        };
    case 'PLACES.GOT_PLACES':
        if (state.loading) {
            return Object.assign({}, state, {
                loading: false,
                places: action.places
            })
        } else {
            console.error("Got Places But was not in PLACES.LOADING state ", action, state)
            return state;
        }
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
    switch (action.type) {
    case 'PLACE.LOADING':
        return Object.assign({}, state, {
            place: null,
            placeId: action.placeId,
            loading: true
        })
    case 'PLACE.GOT_PLACE':
        if (state.loading) {
            if (state.placeId === action.placeId) {
                return Object.assign({}, state, {
                    place: action.place,
                    loading: false
                })
            } else {
                console.error("Loaded " + action.placeId + " but was expecting " + state.placeId)
                return state;
            }
        } else {
            console.error("Got Places But was not in PLACE_DETAIL.LOADING state ", action, state)
            return state;
        }
    default:
        return state
    }
}

function debugHelper(state = {}, action) {
    console.log(action, state);
    return state;
}


let kelpAppReducers = combineReducers({
    debugHelper,
    googleMap,
    places,
    placeDetail,
//    logging,
})


export default kelpAppReducers;