import React, { PropTypes } from 'react'

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react'

import { searchNearby } from 'utils/googleApiHelpers'

import Header from 'components/Header/Header'

import Sidebar from 'components/Sidebar/Sidebar'

import styles from './styles.module.css'

export class MainContainer extends React.Component {
    onMarkerClick(item) {
        const {place} = item;
        const {push} = this.context.router;
        push(`/detail/${place.place_id}`)
    }

    onReady(mapProps, map) {
        const {google, radius, types} = this.props;
        const opts = {
            location: map.center,
            radius,
            types
        }

        this.context.store.dispatch({
            type: 'GOOGLE_MAP.GOT_MAP',
            google,
            map
        })

        searchNearby(google, map, opts)
            .then((results, pagination) => {
                console.log("searchNearby", results, pagination)
                this.context.store.dispatch({
                    type: 'PLACES.GOT_PLACES',
                    places: results,
                    pagination
                })
            }).catch((status, result) => {
            // There was an error
            console.error(status, result)
        })
    }

    content(state) {
        // Don't render an empty div as this messes up the layout
        if (null === this.props.children) {
            return (<noscript/>);
        }

        const childrenWithProps = React.cloneElement(this.props.children,
            {
                google: state.googleMap.google,
                places: state.places.places,
                map: state.googleMap.map,
                onMarkerClick: this.onMarkerClick.bind(this)
            });

        return ( <div className={ styles.content }>
                   { childrenWithProps }
                 </div> )
    }


    render() {
        const state = this.context.store.getState();
        return (
            <div className={ styles.app }>
              <Header/>
              <div className={ styles.panel }>
                <GoogleMap google={ state.google || this.props.google } onReady={ this.onReady.bind(this) } visible={ false }>
                  <div className={ styles.wrapper }>
                    <Sidebar title={ 'Restaurants' } places={ state.places.places } />
                    { this.content(state) }
                  </div>
                </GoogleMap>
              </div>
            </div>
        )
    }
}

MainContainer.propTypes = {
    places: PropTypes.arrayOf(PropTypes.object),
    google: PropTypes.object,
    map: PropTypes.object,
    loaded: PropTypes.bool,
    children: PropTypes.object
}

MainContainer.contextTypes = {
    router: PropTypes.object,
    store: PropTypes.object
}

MainContainer.defaultProps = {
    google: null,
    map: null,
    loaded: false,
    places: [],
    radius: '500',
    types: ['cafe']
}

export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(MainContainer)


// Use connect from react redux ? 

// function mapStateToProps(state, ownProps) {
//   // We need to lower case the login/name due to the way GitHub's API behaves.
//   // Have a look at ../middleware/api.js for more details.
//   const login = ownProps.params.login.toLowerCase()
//   const name = ownProps.params.name.toLowerCase()

//   const {
//     pagination: { stargazersByRepo },
//     entities: { users, repos }
//   } = state

//   const fullName = `${login}/${name}`
//   const stargazersPagination = stargazersByRepo[fullName] || { ids: [] }
//   const stargazers = stargazersPagination.ids.map(id => users[id])

//   return {
//     fullName,
//     name,
//     stargazers,
//     stargazersPagination,
//     repo: repos[fullName],
//     owner: users[login]
//   }
// }

// export default connect(mapStateToProps, {
//   loadRepo,
//   loadStargazers
// })(googleWrappedComponent)


