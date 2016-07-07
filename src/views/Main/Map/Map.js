import React from 'react';

import { Map as GoogleMap } from 'google-maps-react'

import styles from './styles.module.css'

class Map extends React.Component {

    render() {
        return (
            //    <div className={ styles.map }>hello</div>
            <GoogleMap className={ styles.map } google={ this.props.google }>
            </GoogleMap>
        )
    }
}

module.exports = Map;


//            <GoogleMap className={ styles.map } google={ this.props.google }>
//            </GoogleMap>

