import React, {Component} from 'react';
import axios from 'axios';
import SpeakerCard from "../src/SpeakerCard";

import getConfig from 'next/config';

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

class Speakers extends Component {

    static GetSpeakersURL() {
        if (process.env.NODE_ENV === 'production')
            return process.env.RESTURL_SPEAKERS_PROD
                || publicRuntimeConfig.RESTURL_SPEAKERS_PROD;
        return process.env.RESTURL_SPEAKERS_DEV;
    }

    // Next framework runs getInitialProps()
    // before the component construction
    static async getInitialProps() {
        let promise = axios.get(Speakers.GetSpeakersURL())
            .then(response => {
                return {
                    hasErrored: false,
                    speakerData: response.data
                }
            })
            .catch(error => {
                return {
                    hasErrored: true,
                    message: error.message
                }
            });
        return promise;
    }

    // getInitialProps() returns then
    constructor(props) {
        super(props);
        console.log('Speakers:constructor called');
        this.state = {
            isLoading: props.isLoading,
            hasErrored: props.hasErrored,
            message: props.message,
            speakerData: props.speakerData
        }
    }

    // Once a class component is loaded and ready
    componentDidMount() {
    }

    // If the component is removed from the page, the timer is cleared
    // to avoid a memory leak with a 'dangling' timer
    componentWillUnmount() {
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                        {this.state.speakerData.map((speaker) => {
                            return <div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
                                <SpeakerCard isLoading={this.state.isLoading}
                                             speaker={speaker}/>
                            </div>
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Speakers;