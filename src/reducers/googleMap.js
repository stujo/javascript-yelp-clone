const initialGoogleMap = {
    map: null,
    google: null
}

function googleMap(state = initialGoogleMap, action) {
    switch (action.type) {
    case 'MAP.READY':
        return {
            ...state,
            map: action.map

        };
    case 'MAP.GOOGLE_LOADED':
        return {
            ...state,
            google: action.google

        };
    default:
        return state
    }
}

export default googleMap