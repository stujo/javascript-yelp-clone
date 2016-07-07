import React from 'react'

import styles from './styles.module.css'

export class Rating extends React.Component {
    render() {
        return (
            <div className={ styles.rating }>
              { this.props.rating ? this.props.rating : 'N/A' }
            </div>
        )
    }
}

export default Rating


