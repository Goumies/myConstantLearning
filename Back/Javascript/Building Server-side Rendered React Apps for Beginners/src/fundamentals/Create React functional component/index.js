const Hello = function () {
    return React.createElement('h1',
        {className: 'orange'},
        'Hello World from React');
};

ReactDOM.render(
    React.createElement(Hello, {}, null),
    document.getElementById('app')
);