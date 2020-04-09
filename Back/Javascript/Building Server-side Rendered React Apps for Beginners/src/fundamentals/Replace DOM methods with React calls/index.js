const rootElement = document.getElementById('app');

// createElement(tagName, {properties}, children)
const h1ReactElement = React.createElement('h1',
    {className: 'orange'},
    'Hello World from React');

ReactDOM.render(
    h1ReactElement,
    document.getElementById('app')
);