import { PropTypes, Component, Children } from 'react'

export default class StoreContextProvider extends Component {
    getChildContext() {
        window.store = this.props.store;
        return {
            store: this.props.store
        }
    }

    render() {
        return Children.only(this.props.children)
    }
}

StoreContextProvider.childContextTypes = {
    store: PropTypes.object
}

export default StoreContextProvider;