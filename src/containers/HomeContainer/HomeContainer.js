import React, { PropTypes } from 'react'

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react'

import Header from 'components/Header/Header'

import PlacesContainer from 'containers/PlacesContainer/PlacesContainer'

import styles from './styles.module.css'

import * as mapActions from 'actions/map'

export class HomeContainer extends React.Component {
    onMarkerClick(item) {
        const {place} = item;
        const {push} = this.context.router;
        push(`/detail/${place.place_id}`)
    }

    onReady(mapProps, map) {
        const {places, location} = this.context.store.getState()
        const {google} = this.props;
        this.context.store.dispatch(mapActions.ready(google, map))
    }

    content(state) {
        // Don't render an empty div as this messes up the layout
        if (null === this.props.children) {
            return (<noscript/>);
        }

        const childrenWithProps = React.cloneElement(this.props.children,
            {
                google: state.googleMap.google,
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
                <GoogleMap google={ state.googleMap.google || this.props.google } onReady={ this.onReady.bind(this) } visible={ false }>
                  <div className={ styles.wrapper }>
                    <PlacesContainer { ...state.googleMap } {...state.places} />
                    { this.content(state) }
                  </div>
                </GoogleMap>
              </div>
            </div>
        )
    }
}

HomeContainer.propTypes = {
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
}

export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(HomeContainer)


