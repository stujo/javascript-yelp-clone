import React, { PropTypes } from 'react'

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react'

import { searchNearby } from 'utils/googleApiHelpers'

import Header from 'components/Header/Header'

import Sidebar from 'components/Sidebar/Sidebar'

import styles from './styles.module.css'

export class HomeContainer extends React.Component {
    onMarkerClick(item) {
        const {place} = item;
        const {push} = this.context.router;
        push(`/detail/${place.place_id}`)
    }

    onReady(mapProps, map) {
        const {google, radius, types} = this.props;
        const opts = {
            location: map.center,
            radius,
            types
        }

        this.context.store.dispatch({
            type: 'GOOGLE_MAP.GOT_MAP',
            google,
            map
        })

        searchNearby(google, map, opts)
            .then((results, pagination) => {
                console.log("searchNearby", results, pagination)
                this.context.store.dispatch({
                    type: 'PLACES.GOT_PLACES',
                    places: results,
                    pagination
                })
            }).catch((status, result) => {
            // There was an error
            console.error(status, result)
        })
    }

    content(state) {
        // Don't render an empty div as this messes up the layout
        if (null === this.props.children) {
            return (<noscript/>);
        }

        const childrenWithProps = React.cloneElement(this.props.children,
            {
                google: state.googleMap.google,
                places: state.places.places,
                map: state.googleMap.map,
                onMarkerClick: this.onMarkerClick.bind(this)
            });

        return ( <div className={ styles.content }>
                   { childrenWithProps }
                 </div> )
    }


    render() {
        const state = this.context.store.getState();
        return (
            <div className={ styles.app }>
              <Header/>
              <div className={ styles.panel }>
                <GoogleMap google={ state.google || this.props.google } onReady={ this.onReady.bind(this) } visible={ false }>
                  <div className={ styles.wrapper }>
                    <Sidebar title={ 'Restaurants' } places={ state.places.places } />
                    { this.content(state) }
                  </div>
                </GoogleMap>
              </div>
            </div>
        )
    }
}

HomeContainer.propTypes = {
    places: PropTypes.arrayOf(PropTypes.object),
    google: PropTypes.object,
    map: PropTypes.object,
    loaded: PropTypes.bool,
    children: PropTypes.object
}

HomeContainer.contextTypes = {
    router: PropTypes.object,
    store: PropTypes.object
}

HomeContainer.defaultProps = {
    google: null,
    map: null,
    loaded: false,
    places: [],
    radius: '500',
    types: ['cafe']
}

export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(HomeContainer)


