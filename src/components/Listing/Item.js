import React from 'react'

import styles from './styles.module.css'

import { Link } from 'react-router'

import Rating from 'components/Rating/Rating'

const Item = (props) => {
    const {place} = props;
    return (
        <div className={ styles.item }>
          <h3>{ place.name }</h3>
          <Rating rating={ place.rating } />
        </div>
    )
}


export default Item
