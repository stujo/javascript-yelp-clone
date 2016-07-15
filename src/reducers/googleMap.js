const initialGoogleMap = {
    map: undefined,
    google: undefined
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

export default googleMap