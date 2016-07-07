import React from 'react'

import styles from './styles.module.css'

const RatingIcon = (props) => (<span>★</span>)

export class Rating extends React.Component {
    render() {
        const percentage = this.props.rating ? (this.props.rating / 5) : 0;
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
                { this.props.rating ? this.props.rating : 'N/A' }
              </div>
            </div>
        )
    }
}

export default Rating


