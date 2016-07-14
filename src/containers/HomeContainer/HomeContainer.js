import React, { PropTypes } from 'react'

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react'

import { searchNearby } from 'utils/googleApiHelpers'

import Header from 'components/Header/Header'

import Sidebar from 'components/Sidebar/Sidebar'

import styles from './styles.module.css'

import * as mapActions from 'actions/map'
import * as placesActions from 'actions/places'
import * as loggingActions from 'actions/logging'

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

        this.context.store.dispatch(mapActions.ready(google, map))

        this.context.store.dispatch(placesActions.loading())

        searchNearby(google, map, opts)
            .then((results, pagination) => {
                this.context.store.dispatch(placesActions.gotPlaces(results, pagination))
            }).catch((status, result) => {
            this.context.store.dispatch(loggingActions.error({
                status,
                result
            }))
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


