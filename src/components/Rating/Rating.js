import React from 'react'

import styles from './styles.module.css'

export class Rating extends React.Component {
    render() {
        return (
            <div className={ styles.rating }>
              { this.props.rating / 5 }
            </div>
        )
    }
}

export default Rating


