import React from 'react'

import styles from '../styles.module.css'

import { Link } from 'react-router'

import Listing from 'components/Listing/Listing'


export class Sidebar extends React.Component {
    render() {
        console.log("Sidebar", this.props)
        return (
            <div className={ styles.sidebar }>
              <Listing places={ this.props.places } title={ this.props.title } />
            </div>
        )
    }
}

export default Sidebar


