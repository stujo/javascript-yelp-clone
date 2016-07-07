import React from 'react'

import Map, { GoogleApiWrapper } from 'google-maps-react'

import { searchNearby } from 'utils/googleApiHelpers'
import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'

import styles from './styles.module.css'

export class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            places: [],
            pagination: null
        }
    }

    onReady(mapProps, map) {
        const {google} = this.props;
        const opts = {
            location: map.center,
            radius: '500',
            types: ['cafe']
        }
        searchNearby(google, map, opts)
            .then((results, pagination) => {
                this.setState({
                    places: results,
                    pagination
                })
            }).catch((status, result) => {
            // There was an error
        })
    }

    render() {
        return (
            <Map className={ styles.wrapper } google={ this.props.google } onReady={ this.onReady.bind(this) } visible={ false }>
              <Header/>
              <Sidebar title={ 'Restaurants' } places={ this.state.places } />
            </Map>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(Container)