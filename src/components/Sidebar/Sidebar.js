import React from 'react'

import styles from './styles.module.css'

import { Link } from 'react-router'

import Listing from 'components/Listing/Listing'

function Sidebar({places, title}) {
    return (
        <div className={ styles.sidebar }>
          <Listing places={ places } title={ title } />
        </div>
    )
}

export default Sidebar


