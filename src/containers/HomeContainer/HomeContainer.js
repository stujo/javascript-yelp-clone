import React, { PropTypes } from 'react'

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react'

import Header from 'components/Header/Header'

import PlacesContainer from 'containers/PlacesContainer/PlacesContainer'

import styles from './styles.module.css'

import * as mapActions from 'actions/map'

export class HomeContainer extends React.Component {
    onReady(mapProps, map) {
        const {places, location} = this.context.store.getState()
        const {google} = this.props;
        this.context.store.dispatch(mapActions.ready(google, map))
    }

    content(state) {
        // Don't render an empty div as this messes up the layout
        if (null === this.props.children || this.props.children.length == 0) {
            return (<noscript/>);
        } else {
            return ( <div className={ styles.content }>
                       { this.props.children }
                     </div> )
        }
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


