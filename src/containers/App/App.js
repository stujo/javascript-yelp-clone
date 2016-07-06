import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Router } from 'react-router';

import styles from './styles.module.css'

class App extends React.Component {
    static propTypes = {
        routes: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    // class getter
    get content() {
        return (<Router routes={ this.props.routes } history={ this.props.history } />)
    }


    render() {
        return (
            <div className={ styles.wrapper }>
              <h1>Demo</h1>
              <div>
                { this.content }
              </div>
            </div>
        )
    }
}

module.exports = App;