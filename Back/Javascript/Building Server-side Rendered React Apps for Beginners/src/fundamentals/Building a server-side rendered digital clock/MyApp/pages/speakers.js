import React, {Component} from 'react';
import axios from 'axios';
import SpeakerCard from "../src/SpeakerCard";

class Speakers extends Component {

    // Next framework runs getInitialProps()
    // before the component construction
    static async getInitialProps() {
        let promise = axios.get('http://localhost:4000/speakers')
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
                        {this.state.speakerData.map((speaker) =>
                            <div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
                                <SpeakerCard speaker={speaker}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Speakers;