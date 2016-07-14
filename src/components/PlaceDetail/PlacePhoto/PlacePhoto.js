import React from 'react'

import styles from './styles.module.css'

const PlacePhoto = (props) => {
    const {photo} = props;
    const url_100x100 = photo.getUrl({
        'maxWidth': 150,
        'maxHeight': 150
    });

    const style = {
        backgroundImage: "url('" + url_100x100 + "')"
    }

    return (
        <div className={ styles.photo } style={ style } />
    )
}

export default PlacePhoto


