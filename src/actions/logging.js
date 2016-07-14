export const error = (details) => {
    return {
        type: 'LOGGING.ERROR',
        details: JSON.stringify(details)
    }
}

export const log = (details) => {
    return {
        type: 'LOGGING.LOG',
        details: JSON.stringify(details)
    }
}
