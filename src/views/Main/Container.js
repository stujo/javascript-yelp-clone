import React from 'react'

import Map, { GoogleApiWrapper } from 'google-maps-react'

export class Container extends React.Component {
    render() {
        return (
            <div className="map">
              <h1>The Map</h1>
              <Map className="map" google={ this.props.google } />
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(Container)