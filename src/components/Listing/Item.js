import React from 'react'

import styles from './styles.module.css'

import { Link } from 'react-router'

import Rating from 'components/Rating/Rating'

const Item = (props) => {
    const {place} = props;
    return (
        <div className={ styles.item }>
          <Link to={ "/detail/" + place.place_id } className={ styles.heading }>
          <h3>{ place.name }</h3>
          </Link>
          <Rating rating={ place.rating } className={ styles.rating } />
        </div>
    )
}


export default Item
