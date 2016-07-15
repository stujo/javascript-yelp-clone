import React, { PropTypes } from 'react';

import Map from 'components/Map/Map'
import LoadingPleaseWait from 'components/LoadingPleaseWait/LoadingPleaseWait'

export class MapContainer extends React.Component {

    onMarkerClick(item) {
        const {place} = item;
        const {push} = this.context.router;
        push(`/detail/${place.place_id}`)
    }

    render() {
        const {places, googleMap} = this.context.store.getState();
        const onClick = this.onMarkerClick.bind(this);

        if (places.center) {
            return (<Map google={ googleMap.google } center={ places.center } places={ places.places || [] } onMarkerClick={ onClick } />);
        } else {
            return (<LoadingPleaseWait/>);
        }
    }
}

MapContainer.contextTypes = {
    router: PropTypes.object,
    store: PropTypes.object
}

export default MapContainer
