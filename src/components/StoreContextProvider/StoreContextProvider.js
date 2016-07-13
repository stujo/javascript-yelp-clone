import { PropTypes, Component } from 'react'

export default class StoreContextProvider extends Component {
    getChildContext() {
        window.store = this.props.store;
        return {
            store: this.props.store
        }
    }

    render() {
        return this.props.children;
    }
}

StoreContextProvider.childContextTypes = {
    store: PropTypes.object
}

export default StoreContextProvider;