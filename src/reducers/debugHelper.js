const debugHelper = (state = {
        enabled: true
    }, action) => {

    if (state.enabled) {
        console.log(`ACTION->${action.type}`, action, state);
    }

    switch (action.type) {
    case 'DEBUGGER.ENABLE':
        return {
            enabled: true
        }
    case 'DEBUGGER.DISABLE':
        return {
            enabled: false
        }
    }
    return state;
}

export default debugHelper;