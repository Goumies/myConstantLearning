import React, {Component} from 'react';
import axios from 'axios';
import Link from 'next/link';

class Index extends Component {

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
        console.log('Index:constructor called');
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
            <div>
                <Link href='/sessions'>
                    <a>SESSIONS</a>
                </Link>
                <ul>
                    {this.state.speakerData.map(speaker =>
                        <li key={speaker.id}>
                            {speaker.firstName} {speaker.lastName}
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default Index;