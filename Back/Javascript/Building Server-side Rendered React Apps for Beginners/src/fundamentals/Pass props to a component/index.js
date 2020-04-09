const Hello = function (props) {
    return React.createElement('h1',
        {className: 'orange'},
        'Hello World from React on the ' + props.time);
};

ReactDOM.render(
    React.createElement(Hello, {time: new Date().toLocaleDateString()},
        null),
    document.getElementById('app')
);