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

export default places