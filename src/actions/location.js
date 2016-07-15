export const unavailable = (message = '') => {
    return {
        type: 'LOCATION.UNAVAILABLE',
        message
    }
}

export const requesting = (message = '') => {
    return {
        type: 'LOCATION.REQUESTING',
        message
    }
}

export const ready = (location, message = '') => {
    return {
        type: 'LOCATION.READY',
        location,
        message
    }
}
