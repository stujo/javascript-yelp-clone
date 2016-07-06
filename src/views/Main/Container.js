import React from 'react'

import Map, { GoogleApiWrapper } from 'google-maps-react'


export class Container extends React.Component {
    render() {
        return (
            <div>
              Hello from the container
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(Container)