import React, { PropTypes } from 'react';

import { getDetails } from 'utils/googleApiHelpers'

import PlaceDetail from 'components/PlaceDetail/PlaceDetail'


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

        this.context.store.dispatch({
            type: 'PLACE_DETAIL.LOADING',
            placeId
        })

        getDetails(google, map, placeId)
            .then((place) => {
                console.log("Place", place)
                this.context.store.dispatch({
                    type: 'PLACE_DETAIL.GOT_PLACE',
                    placeId,
                    place
                })
            }).catch((status, result) => {
            // There was an error
            this.context.store.dispatch({
                type: 'ERROR',
                details: {
                    component: 'PlaceContainer',
                    placeId,
                    status,
                    result
                }
            })
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
