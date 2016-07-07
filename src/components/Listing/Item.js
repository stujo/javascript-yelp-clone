import React from 'react'

import styles from './styles.module.css'

import { Link } from 'react-router'

import Rating from 'components/Rating/Rating'

export class Item extends React.Component {
    render() {
        const {place} = this.props;
        return (
            <div className={ styles.item }>
              <h1>{ place.name }</h1>
              <Rating rating={ place.rating } />
            </div>
        )
    }
}

export default Item
