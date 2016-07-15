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
    return (<div>
              <h1>{ props.place.name }</h1>
              <div className={ styles.gallery }>
                { renderPhotos(props.place) }
              </div>
            </div>
        );
}

export default PlaceDetail
