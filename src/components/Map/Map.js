import React from 'react';

import { Map as GoogleMap, Marker } from 'google-maps-react'

import styles from './styles.module.css'


const renderMarkers = (props) => {
    const {places, onMarkerClick} = props;
    if (places) {
        return places.map(place => {
            return <Marker onClick={ onMarkerClick } key={ place.id } name={ place.id } place={ place } position={ place.geometry.location } />
        })
    } else {
        return '';
    }
}

const Map = (props) => {
    const {google} = props;

    return (
        <GoogleMap className={ styles.map } google={ google } center={ props.center } initialCenter={ props.center }>
          { renderMarkers(props) }
        </GoogleMap>
    )
}

module.exports = Map;
