import React from 'react'

import styles from './styles.module.css'

import { Link } from 'react-router'

export class Header extends React.Component {
    render() {
        return (
            <div className={ styles.topbar }>
              <div className={ styles.brand }>
                <Link to="/">
                <h1>Yelp</h1></Link>
              </div>
              <section>
                Section Text
              </section>
            </div>
        )
    }
}

export default Header


