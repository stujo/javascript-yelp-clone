import React, { PropTypes } from 'react'

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react'

import Header from 'components/Header/Header'

import PlacesContainer from 'containers/PlacesContainer/PlacesContainer'

import styles from './styles.module.css'

import * as mapActions from 'actions/map'

export class HomeContainer extends React.Component {

    // Called because the GoogleApiWrapper re-renders with new props when the
    // the google api is loaded
    componentWillReceiveProps(newProps) {
        const {google} = newProps;
        if (google != this.props.google) {
            this.context.store.dispatch(mapActions.googleLoaded(google))
        }
    }

    onReady(mapProps, map) {
        this.context.store.dispatch(mapActions.mapReady(map))
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

        const googleMapProps = {
            google: state.googleMap.google,
            onReady: this.onReady.bind(this),
            visible: false,
            containerStyle: {
                width: 0,
                height: 0
            } // save the component taking over the page
        }

        return (
            <div className={ styles.app }>
              <Header/>
              <div className={ styles.panel }>
                <div className={ styles.wrapper }>
                  <PlacesContainer { ...state.googleMap } {...state.places} />
                  { this.content(state) }
                </div>
              </div>
              <GoogleMap {...googleMapProps} />
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


