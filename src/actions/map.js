export const mapReady = (map) => {
    return {
        type: 'MAP.READY',
        map
    }
}

export const googleLoaded = (google) => {
    return {
        type: 'MAP.GOOGLE_LOADED',
        google
    }
}

