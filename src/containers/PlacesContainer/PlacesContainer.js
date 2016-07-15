import React, { PropTypes } from 'react'

import Sidebar from 'components/Sidebar/Sidebar'
import LoadingPleaseWait from 'components/LoadingPleaseWait/LoadingPleaseWait'

import * as placesActions from 'actions/places'
import * as loggingActions from 'actions/logging'

import { searchNearby } from 'utils/googleApiHelpers'

export class PlacesContainer extends React.Component {

    doLookupImpl(google, map, location, radius, type) {
        this.context.store.dispatch(placesActions.loading())

        const opts = {
            location,
            radius,
            types: [type]
        }

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

    doLookup(google, map) {
        if (google && map) {
            const {places} = this.context.store.getState();
            if (!places.loading && places.places === undefined && places.center) {
                this.doLookupImpl(google, map, places.center, places.radius, places.type)
            }
        }
    }

    componentWillMount() {
        const {google, map} = this.props;
        this.doLookup(google, map);
    }

    componentWillUpdate(nextProps, nextState) {
        const {google, map} = nextProps;
        this.doLookup(google, map);
    }

    componentWillReceiveProps(nextProps) {
        const {google, map} = nextProps;
        this.doLookup(google, map);
    }

    render() {
        const {places} = this.context.store.getState();
        if (places.places) {
            return (<Sidebar title={ places.type || 'default' } places={ places.places } />)
        } else {
            return (<LoadingPleaseWait/>)
        }
    }
}

PlacesContainer.propTypes = {
    google: PropTypes.object,
    map: PropTypes.object,
    type: PropTypes.string,
    radius: PropTypes.string,
    center: PropTypes.object
}

PlacesContainer.contextTypes = {
    store: PropTypes.object
}

export default PlacesContainer
