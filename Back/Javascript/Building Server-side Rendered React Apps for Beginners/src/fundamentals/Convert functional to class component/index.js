class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }

    tick() {
        // replacing with new state
        this.setState(() => {
            return ({
                time: new Date().toLocaleString()
            })
        })
    }

    // Once a class component is loaded and ready
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    // If the component is removed from the page, the timer is cleared
    // to avoid a memory leak with a 'dangling' timer
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return React.createElement('h1',
            {className: 'orange'},
            'Hello World from React on the ' + this.state.time);
    }
}

ReactDOM.render(
    React.createElement(Hello, {time: new Date().toLocaleString()},
        null),
    document.getElementById('app')
);