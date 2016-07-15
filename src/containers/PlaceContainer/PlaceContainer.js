import React, { PropTypes } from 'react';

import { getDetails } from 'utils/googleApiHelpers'

import LoadingPleaseWait from 'components/LoadingPleaseWait/LoadingPleaseWait'

import PlaceDetail from 'components/PlaceDetail/PlaceDetail'

import * as placeActions from 'actions/place'
import * as loggingActions from 'actions/logging'


export class PlaceContainer extends React.Component {

    componentDidMount() {
        this.loadDetails(this.props.map);
    }

    componentDidUpdate(prevProps) {
        this.loadDetails();
    }

    loadDetails() {
        const {googleMap, place} = this.context.store.getState();
        const {placeId} = this.props.params;
        const {google, map} = googleMap;

        if (google && map) {

            if (!place.loading && placeId !== place.placeId) {

                this.context.store.dispatch(placeActions.loading(placeId));

                getDetails(google, map, placeId)
                    .then((place) => {
                        this.context.store.dispatch(placeActions.gotPlace(placeId, place))
                    }).catch((status, result) => {
                    // There was an error
                    debugger;
                    this.context.store.dispatch(loggingActions.error({
                        placeId,
                        status,
                        result
                    }
                    ))
                })
            }
        }
    }

    render() {
        const {place} = this.context.store.getState();
        console.log("PlaceContainer", place)
        if (place.place) {
            return (<PlaceDetail { ...place } />);
        } else {
            return (<LoadingPleaseWait/>);
        }

    }
}

PlaceContainer.contextTypes = {
    store: PropTypes.object
}

export default PlaceContainer
