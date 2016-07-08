import React from 'react'

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react'

import { searchNearby } from 'utils/googleApiHelpers'

import Header from 'components/Header/Header'

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

    content() {
        // Don't render an empty div as this messes up the layout
        if (null === this.props.children) {
            return (<noscript/>);
        }
        var childrenWithProps = this.props.children ? React.cloneElement(this.props.children, this.props) : null;

        return ( <div className={ styles.content }>
                   { childrenWithProps }
                 </div> )
    }


    render() {
        return (
            <div>
              <Header/>
              <GoogleMap className={ styles.wrapper } google={ this.props.google } onReady={ this.onReady.bind(this) } visible={ false }>
                <Sidebar title={ 'Restaurants' } places={ this.state.places } />
                { this.content() }
              </GoogleMap>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(MainContainer)