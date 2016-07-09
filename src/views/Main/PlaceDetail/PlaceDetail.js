import React from 'react';

import styles from './styles.module.css'

import { getDetails } from 'utils/googleApiHelpers'


export class PlaceDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        if (this.props.map) {
            this.loadDetails(this.props.map);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.map && // make sure we have a map
                (prevProps.map !== this.props.map ||
                prevProps.params.placeId !== this.props.params.placeId)) {
            this.loadDetails();
        }
    }

    loadDetails() {
        const {google, map} = this.props;
        const {placeId} = this.props.params;

        getDetails(google, map, placeId)
            .then((place) => {
                console.log("Place", place)
                this.setState({
                    loading: false,
                    place
                })
            }).catch((status, result) => {
            // There was an error
            console.error(status, result)
        })
    }

    get content() {
        if (this.state.loading) {
            return "Loading Please Wait"
        } else {
            const {place} = this.state;
            return place.name
        }
    }

    render() {
        const {place} = this.state;
        return (
            <div>
              { this.content }
            </div>
            );
    }
}

export default PlaceDetail
