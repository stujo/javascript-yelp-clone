export const loading = (placeId) => {
    return {
        type: 'PLACE.LOADING',
        placeId
    }
}

export const gotPlace = (placeId, place) => {
    return {
        type: 'PLACE.GOT_PLACE',
        placeId,
        place
    }
}

