# Building Server-side Rendered React Apps for Beginners

## Why is Server Side Rendering important
First page (of the site) download issue solved
    Client Side Rendering implies multiple interactions between Client and Server \
        Minimal HTML > JS > REST calls > Complete HTML page
        
Great User experience (pros of SPA)

## Fundamentals of building with React and Server Side Rendering
Next.js, SSR React Framework

## Building a simple React App with no build system
    DOM methods to write text to browser
    Replace DOM methods with React calls
    Create React functional component
    Pass props to a component
    Convert functional to class component
    Using JSX* (Javascript XML) files and Next.js as build system
        JSX Preprocessor
            JSX (Browserify) > Bundle (Webpack) > JS (Babel)
    Building a server-side rendered digital clock
        /!\ HTML Mismatch error
        (cF [screenshot](Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/HTML mismatch error.png))
        --> Important new static method coming : getInitialProps (Next.js)
        
* JSX : special markup language compiled in Javascript by React
        
## How server-side rendered HTML must sync with client-side Javascript

## Clean technique for handling async data (REST) on the server
axios : node lib that lets us process REST calls easily
json-server : for dev time, place to get REST data from
              no need to run it on production time
              
## Difference between client and server-side routing

## Model-View-Intent Architecture (CSR apps)
=> elm, cycle.js

3 components :
    Model (Unique Source of Truth)
        Single object that completely describes the state of the UI
    View
        Function transforming the Model (input) into the UI (output)
    Intent (processed on the Model)
        User's action that will be applied to the Model which will be updated
        
## Extending your SSR App to the real World
/pages/_documents.js
    bootstrap recommend using meta tag with a named viewport to the header section of every pages
    = _documents.js = next dedicated files
    = only rendered during a SSR render

/!\ In newer versions, /static has been replaced by /public
    Here is the correct way to point to assets
    `<img src='/SVCClogo.png' />`

/pages
    file name = URL route
    So for effective routing, always name file with lower case
    Component = PascalCase
    files for specific SSR pages

/src
    Standard React components

/!\ Every component server-side rendered must contains 
    `static async getInitialProps() {...}`
    to be effectively rendered
    
/pages/_app.js
    implements page layouts
    = hook to surround the component created normally in /pages
    with our own components => Headers Menus...
    = good place to put bootstrap CSS imports
    
---
## React Fundamentals
## Components
Function components where possible :
    More concise
    Encourages better design

### NB : All React components must act like pure functions with respect to their props - React documentation

### Component Lifecycle (useful when writing a component to wrap an imperative API => JQuery plugin)
-Will- method happens immediately prior to the action => Mount
-Did- method happens immediately after to the action => Update
#### Mounting
    constructor > componentWillMount > render > componentDidMount 
#### Updating
    componentWillReceiveProps > shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate 

## State
Alternative component data container
State = local + mutable data within the component
setState notifies React that the state has changed and that the component needs to be re-rendered
    merges previous state with the state change
State changes are bashed

## Prop Validation
PropTypes (RunTime validation)

Props equal `true` by default.

```javascript
import PropTypes from 'prop-types';

function MyComponent(props){
    return <h1>{props.a} + {props.b} = {props.a + props.b}</h1>
}

MyComponent.PropTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
};

// Throws an error at runtime, won't prevent it
ReactDOM.render(<MyComponent a={"a"} b={2}  />,
    document.getElementById('root')

);
```

TypeScript and Flow (Compile Time validation)
Better than PropTypes

```typescript jsx
import React from './src/fundamentals/Building a server-side rendered digital clock/MyApp/node_modules/react';
import ReactDOM from './src/fundamentals/Building a server-side rendered digital clock/MyApp/node_modules/react-dom';

interface MyComponentProps {
    a: number;
    b: number;
}

function MyComponent(props: MyComponentProps) {
    return <h1>{props.a} + {props.b} = {props.a + props.b}</h1>;
}

ReactDOM.render(<MyComponent a={"a"} b={2}  />,
    document.getElementById('root')
);
```

---