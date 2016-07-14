import React from 'react'

import styles from './styles.module.css'

import { Link } from 'react-router'

const Header = (props) => {
    return (
        <div className={ styles.topbar }>
          <div className={ styles.brand }>
            <Link to="/">
            <h1>Kelp Clone</h1>
            </Link>
          </div>
          <section>
            <Link to={ '/map' }>Map</Link>
          </section>
        </div>
    )
}

export default Header


