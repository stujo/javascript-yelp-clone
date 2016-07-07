import React from 'react'

import styles from './styles.module.css'

import { Link } from 'react-router'

export class Header extends React.Component {
    render() {
        return (
            <div className={ styles.topbar }>
              <Link to="/">
              <h1>Yelp</h1></Link>
              <section>
                Section Text
              </section>
            </div>
        )
    }
}

export default Header


