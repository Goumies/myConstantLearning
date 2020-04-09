import React, {Component} from 'react';
import axios from "axios";

class Sessions extends Component {
    static async getInitialProps() {
        let promise = axios.get('http://localhost:4000/sessions')
            .then(response => {
                return {
                    hasErrored: false,
                    sessionData: response.data
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

    constructor(props) {
        super(props);
        console.log('Session:constructor called');
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            sessionData: props.sessionData
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.sessionData.map(session =>
                        <li key={session.id}>
                            {session.title} {session.id}
                        </li>)}
                </ul>
            </div>
        );
    }
}

Sessions.propTypes = {};
Sessions.defaultProps = {};

export default Sessions;