import React, { PropTypes } from 'react';

import styles from './styles.module.css'

import { getDetails } from 'utils/googleApiHelpers'

import PlacePhoto from './PlacePhoto/PlacePhoto'

const photo_url_key_args = {
    'maxWidth': 150,
    'maxHeight': 150
}

export class PlaceDetail extends React.Component {

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

            // this.setState({
            //     loading: false,
            //     place
            // })
            }).catch((status, result) => {
            // There was an error
            console.error(status, result)
        })
    }

    content(state) {
        if (state.loading) {
            return (<div className="loading">Loading Please Wait</div>);
        } else {
            const {place} = state;
            return (<div>
                      <h1>{ place.name }</h1>
                      <div className={ styles.gallery }>
                        { this.photos(place) }
                      </div>
                    </div>
                );
        }
    }

    photos(place) {
        if (!place.photos) {
            return;
        }
        return place.photos.slice(0, 8).map(function(photo) {
            return (<PlacePhoto photo={ photo } key={ photo.getUrl(photo_url_key_args) } />)
        })
    }

    render() {
        const {placeDetail} = this.context.store.getState();
        return (
            <div>
              { this.content(placeDetail) }
            </div>
            );
    }
}

PlaceDetail.contextTypes = {
    store: PropTypes.object
}

export default PlaceDetail
