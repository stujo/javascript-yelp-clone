import React, { PropTypes } from 'react';

import { getDetails } from 'utils/googleApiHelpers'

import PlaceDetail from 'components/PlaceDetail/PlaceDetail'

import * as placeActions from 'actions/place'
import * as loggingActions from 'actions/logging'


export class PlaceContainer extends React.Component {

    componentDidMount() {
        if (this.props.map) {
            this.loadDetails(this.props.map);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.map && // make sure we have a map
                (prevProps.map !== this.props.map ||
                prevProps.params.placeId !== this.props.params.placeId)) {
            this.loadDetails();
        }
    }

    loadDetails() {
        const {google, map} = this.props;
        const {placeId} = this.props.params;

        this.context.store.dispatch(placeActions.loading(placeId));

        getDetails(google, map, placeId)
            .then((place) => {
                this.context.store.dispatch(placeActions.gotPlace(placeId, place))
            }).catch((status, result) => {
            // There was an error
            this.context.store.dispatch(loggingActions.error({
                placeId,
                status,
                result
            }
            ))
        })
    }

    render() {
        const {placeDetail} = this.context.store.getState();
        return (<PlaceDetail placeId={ placeDetail.placeId } place={ placeDetail.place } loading={ placeDetail.loading } />);
    }
}

PlaceContainer.contextTypes = {
    store: PropTypes.object
}

export default PlaceContainer
