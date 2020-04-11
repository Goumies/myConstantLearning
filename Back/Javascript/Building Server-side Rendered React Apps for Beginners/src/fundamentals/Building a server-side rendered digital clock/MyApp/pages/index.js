import React, {Component} from 'react';

class Index extends Component {

    // Next framework runs getInitialProps()
    // before the component construction
    static async getInitialProps() {
        return {};
    }

    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col margintopbottom">
                            <h2>Home</h2>
                            <h6 className="margintopbottom20">
                                Silicon Valley Code Camp is a community event where
                                developers learn from fellow developers.
                            </h6>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

Index.propTypes = {};
Index.defaultTypes = {};

export default Index;