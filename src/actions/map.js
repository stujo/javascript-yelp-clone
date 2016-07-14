export const ready = (google, map) => {
    return {
        type: 'MAP.READY',
        google,
        map
    }
}
