import React from 'react'

import styles from './styles.module.css'

import { Link } from 'react-router'

import Item from './Item'

export class Listing extends React.Component {
    render() {
        return (
            <div className={ styles.listing }>
              <h2 className={ styles.listing_title }>{ this.props.title }</h2>
              { this.props.places.map(place => {
                    return <Item place={ place } onClick={ this.props.onClick } key={ place.id } />;
                }) }
            </div>
        )
    }
}

export default Listing


