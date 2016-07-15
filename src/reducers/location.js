const initialLocation = {
    available: true,
    loading: false,
    message: undefined,
    location: undefined
}

function location(state = initialLocation, action) {
    switch (action.type) {
    case 'LOCATION.UNAVAILABLE':
        return {
            ...state,
            location: undefined,
            available: false,
            loading: false,
            message: action.message || "GPS Location Not Available"
        };
    case 'LOCATION.REQUESING':
        return {
            ...state,
            location: undefined,
            available: true,
            loading: true,
            message: action.message || "Requesting GPS Location"
        };
    case 'LOCATION.READY':
        return {
            ...state,
            location: action.location,
            available: true,
            loading: false,
            message: action.message || "GPS Location Retreived"
        };
    default:
        return state
    }
}

export default location