
export const loading = () => {
    return {
        type: 'PLACES.LOADING'
    }
}

export const gotPlaces = (places, pagination) => {
    return {
        type: 'PLACES.GOT_PLACES',
        places,
        pagination
    }
}
