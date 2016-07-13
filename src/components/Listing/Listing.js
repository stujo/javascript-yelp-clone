import React from 'react'

import styles from './styles.module.css'

import { Link } from 'react-router'

import Item from './Item'

const Listing = (props) => {

    const places = props.places || []

    return (
        <div className={ styles.listing }>
          <h2 className={ styles.title }>{ props.title }</h2>
          { places.map(place => {
                return <Item place={ place } onClick={ props.onClick } key={ place.id } />;
            }) }
        </div>
    )

}

export default Listing
