import React, {Component} from "react";
import Link from 'next/link';
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import {MediaBlock} from "react-placeholder/lib/placeholders";

class SpeakerCard extends Component {
    render() {
        const awesomePlaceholder1 = <MediaBlock color="#E0E0E0" rows={6}/>;
        return (
            <ReactPlaceholder
                showLoadingAnimation
                delay={5000}
                ready={!this.props.isLoading}
                customPlaceholder={awesomePlaceholder1}
            >
                <img className="card-img-top" src={`/speakers/Speaker-${this.props.speaker.id}.jpg`}/>
                <div className="card-body">
                    <Link
                        href={{
                            pathname: '/speaker', query:
                                {
                                    speakerId: this.props.speaker.id
                                }
                        }}
                        as={`speaker/${this.props.speaker.id}`}>
                        <a className="btn btn-lg btn-block btn-outline-primary">
                            Details
                        </a>
                    </Link>
                    <h4 className="card-title">{this.props.speaker.userFirstName} {this.props.speaker.userLastName} </h4>
                    <p className="card-text">{this.props.speaker.bioShort}</p>
                </div>
            </ReactPlaceholder>
        );
    }
}

export default SpeakerCard;