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

    onMarkerClick(item) {
        const {place} = item;
        const {push} = this.context.router;
        push(`/detail/${place.place_id}`)
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
                console.log("Setting State from searchNearby")
                this.setState({
                    places: results,
                    map: map,
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
        console.log("Getting content")

        const childrenWithProps = React.cloneElement(this.props.children,
            {
                google: this.props.google,
                places: this.state.places || [],
                loaded: this.props.loaded,
                map: this.state.map,
                onMarkerClick: this.onMarkerClick.bind(this)
            });

        return ( <div className={ styles.content }>
                   { childrenWithProps }
                 </div> )
    }


    render() {
        return (
            <div className={ styles.app }>
              <Header/>
              <div className={ styles.panel }>
                <GoogleMap google={ this.props.google } onReady={ this.onReady.bind(this) } visible={ false }>
                  <div className={ styles.wrapper }>
                    <Sidebar title={ 'Restaurants' } places={ this.state.places } />
                    { this.content() }
                  </div>
                </GoogleMap>
              </div>
            </div>
        )
    }
}

MainContainer.contextTypes = {
    router: React.PropTypes.object
}



export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(MainContainer)