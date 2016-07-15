const initialPlace = {
    loading: false,
    placeId: null,
    place: null
}

function place(state = initialPlace, action) {
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

                return {
                    ...state,
                    place: action.place,
                    loading: false
                }
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

export default place
