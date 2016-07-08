import React from 'react'

import styles from './styles.module.css'

const RatingIcon = (props) => (<span>★</span>)

const Rating = (props) => {
    const percentage = props.rating ? (props.rating / 5) : 0;
    const style = {
        width: `${Math.round((percentage || 0) * 100)}%`
    }
    return (
        <div>
          <div className={ styles.sprite }>
            <div className={ styles.top } style={ style }>
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
            </div>
            <div className={ styles.bottom }>
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
            </div>
          </div>
          <div className={ styles.rating }>
            { props.rating ? props.rating : 'N/A' }
          </div>
        </div>
    )
}

export default Rating


