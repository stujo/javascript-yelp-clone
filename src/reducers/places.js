const initialPlaces = {
    loading: false,
    places: undefined,
    center: undefined,
    radius: '500',
    type: 'cafe'
}

function places(state = initialPlaces, action) {
    switch (action.type) {
    case 'LOCATION.READY':
        return {
            ...state,
            center: {
                lat: action.location.coords.latitude,
                lng: action.location.coords.longitude
            }
        };
    case 'PLACES.LOADING':
        return {
            ...state,
            loading: true,
            places: undefined
        };
    case 'PLACES.GOT_PLACES':
        if (state.loading) {
            return {
                ...state,
                loading: false,
                places: action.places
            };
        } else {
            console.error("Got Places But was not in PLACES.LOADING state ", action, state)
            return state;
        }
    default:
        return state
    }
}

export default places