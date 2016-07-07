import React from 'react'

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react'

import { searchNearby } from 'utils/googleApiHelpers'

import Sidebar from './Sidebar/Sidebar'

import styles from './styles.module.css'

export class MainContainer extends React.Component {
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
            console.error(status, result)
        })
    }

    render() {
        var childrenWithProps = this.props.children ? React.cloneElement(this.props.children, this.props) : null;

        return (
            <GoogleMap className={ styles.wrapper } google={ this.props.google } onReady={ this.onReady.bind(this) } visible={ false }>
              <Sidebar title={ 'Restaurants' } places={ this.state.places } />
              <div className={ styles.content }>
                { childrenWithProps }
              </div>
            </GoogleMap>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(MainContainer)