import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Router } from 'react-router';

import styles from './styles.module.css'

import Header from 'components/Header/Header'

class App extends React.Component {
    static propTypes = {
        routes: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className={ styles.app }>
              <Header/>
              <Router routes={ this.props.routes } history={ this.props.history } />
            </div>
        )
    }
}

module.exports = App;