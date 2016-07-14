import React, { PropTypes } from 'react';

import styles from './styles.module.css'

import PlacePhoto from './PlacePhoto/PlacePhoto'

const photo_url_key_args = {
    'maxWidth': 150,
    'maxHeight': 150
}

function renderPhotos(place) {
    if (!place.photos) {
        return;
    }
    return place.photos.slice(0, 8).map(function(photo) {
        return (<PlacePhoto photo={ photo } key={ photo.getUrl(photo_url_key_args) } />)
    })
}

function PlaceDetail(props) {
    if (props.loading) {
        return (<div className="loading">Loading Please Wait</div>);
    } else {
        const {place} = props;
        const photos = place.photos || [];

        return (<div>
                  <h1>{ place.name }</h1>
                  <div className={ styles.gallery }>
                    { renderPhotos(place) }
                  </div>
                </div>
            );
    }
}

export default PlaceDetail
