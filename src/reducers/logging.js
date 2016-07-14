const initialLogging = {
    errors: [],
    logs: []
}

function addLogEvent(container, event) {
    return container.concat([event])
}

const logging = (state = initialLogging, action) => {
    switch (action.type) {
    case 'LOGGING.ERROR':
        return Object.assign({}, state, {
            logs: state.logs,
            errors: addLogEvent(state.errors, action)
        })
    case 'LOGGING.LOG':
        return Object.assign({}, state, {
            errors: state.errors,
            logs: addLogEvent(state.logs, action)
        })
    default:
        return state
    }
}

export default logging