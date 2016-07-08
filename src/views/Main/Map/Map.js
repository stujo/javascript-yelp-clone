import React from 'react';

import { Map as GoogleMap, Marker } from 'google-maps-react'

import styles from './styles.module.css'

class Map extends React.Component {
    renderMarkers() {
        return this.props.places.map(place => {
            return <Marker onClick={ this.props.onMarkerClick } key={ place.id } name={ place.id } place={ place } position={ place.geometry.location } />
        })

    }
    render() {
        return (
            <GoogleMap className={ styles.map } google={ this.props.google }>
              { this.renderMarkers() }
            </GoogleMap>
        )
    }
}

module.exports = Map;
