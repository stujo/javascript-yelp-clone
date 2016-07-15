import React, { PropTypes } from 'react';

import Map from 'components/Map/Map'
import LoadingPleaseWait from 'components/LoadingPleaseWait/LoadingPleaseWait'

export class MapContainer extends React.Component {
    render() {
        const {places} = this.context.store.getState();
        if (places.center) {
            return (<Map google={ this.props.google } center={ places.center } places={ places.places || [] } />);
        } else {
            return (<LoadingPleaseWait/>);
        }
    }
}

MapContainer.contextTypes = {
    store: PropTypes.object
}

export default MapContainer
