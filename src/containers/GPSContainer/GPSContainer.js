import React, { PropTypes } from 'react';


import * as locationActions from 'actions/location'


export class GPSContainer extends React.Component {

    componentDidMount() {
        this.requestLocation("componentDidMount")
    }

    requestLocationImpl(message) {
        const store = this.context.store;
        if (navigator.geolocation) {
            store.dispatch(locationActions.requesting(message));
            navigator.geolocation.getCurrentPosition(function(position) {
                store.dispatch(locationActions.ready(position))
            });
        } else {
            this.context.store.dispatch(locationActions.unavailable(message))
        }
    }

    requestLocation(message) {
        const store = this.context.store;
        const {location, requesting} = store.getState().location;

        if (!location && !requesting) {
            this.requestLocationImpl(message)
        }
    }

    render() {
        return (<div className="gpslookup">
                  { this.props.children }
                </div>);
    }
}

GPSContainer.contextTypes = {
    store: PropTypes.object
}

export default GPSContainer
