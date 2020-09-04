# Test-driven Development Using React 
[Pluralsight course](https://app.pluralsight.com/library/courses/test-driven-development-react/table-of-contents)

## Course intro
"
    If you want quality code, you need to test it.
    You should already know what you're looking for in your code before you test it,
"
    Well structured
    Maintainable
    Readable
    Reliable
    ---
    Store Locator Requirements
        Display a map
        Select a shop
        Marker shows location
        User can search
        Detect user location
        Get directions
        Scalable

## Introducing TDD with React
Front-end dev is complex : languages, libraries / tools, devices

### What's TDD ?
Small steps
TDD Development
    RED > GREEN > REFACTOR
    TEST > CODE > REFACTOR

### What's React ?
New way to think about building an app
More than just a JS lib for building UI
    1. Startup w/ poorly designed components
    2. Gradually improving them
    
Welcome to Front-end dev : 
HTML + CSS (Sass / Bootstrap) + JS + Node (NPM) + IDE + ESLint + Webpack + Babel + Git + Jest (built specifically w/ React in mind)
    > create-react-app

### How to get started with TDD and React ?
Introducing Create React App

/src/index.js :
    main js file : bundled by Webpack
    `ServiceWorker` allows caching
    `react-dom` handles interactions between react components and the web browser
        ```
        ReactDOM.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
          document.getElementById('root')
        );
        
        /*
        ReactDOM.render(
          ComponentToRender,
          ComponentHtmlLocation
        );
        */
        
        ```
        
/src/App.js :
    A component returns javascript through its render() method
    render() > JSX gets compile to a call to React.createElement() method
        > JS generates HTML
        
1) Create Component.test.js (duplicate built-in App.test.js)
2) Import non-existing component
3) Replace all 'App' occurrences by 'Header'
4) Expected Fail
5) Create Header.js :
```jsx harmony
import React from 'react';

const Header = () => {
  return (
    <div className="Header">
      <p>This is the header</p>
    </div>
  );
};

export default Header;
```
6) Make tests pass
7) Refactoring
    Stateful / Container / Smart Components
    Stateless / Presentational / Dumb Components
        /__tests__ = jest default name convention 

## Discovering the need for TDD
Types of Software Testing
    Unit testing (isolated piece of code)
    Integration testing (group of components alog w/ hardaware)
    Performance testing (speed of the system)
    Usability testing (product from the customer perspective : easy to use ? pleasing ?)
    Acceptance testing (does the product meets the requirements of the customer ?)
    Regression testing (modification works correctly ? Did anything beak as a result of a modification)

Testing framework : software that we use to automate the running of tests. Testing frameworks for JavaScript include Jasmine, Mocha, Jest, QUnit... 
    => Jasmine, Mocha, QUnit, Jest
    
Standard conventions :
    Suite
        Set of tests for a particular unit
    Spec
        Single test within a suite of test
    Assertion
        Produces true or false values using matchers
    Matcher
        Looks for match between expected and actual values
    Test runner
        Runs automated tests
        
    Required functionalities for Software Testing    
        Automation
        Assertion
    = included in Jasmine and Jest
    
    Mocha can be completed w/ chai should.js assert.js
    
    1 assertion / test otherwise you're testing to much things at the same time
    
### TDD Cycle
Test ('Red bar') > Code > Refactor

--- Test
What you should test ?
    Does it render ?
    Does it render correctly ?
    Does it handles events correctly ?
    Do conditionals work ?
    Are edge cases handled appropriately ?
---
What makes a good test ?
    Each tests should be independent others
    Any behavior should be specified in only 1 test
    No unnecessary assertions
    Test only 1 code unit at a time
    Avoid unnecessary preconditions => other test running 1st
--- Code
How to make the test pass as quickly as possible ?
    Strategies
        Fake it
        Use obvious clean solution (don't try to hard)
        Triangulation : Only generalize code when you have 2 examples of the test failing
--- Refactor
What to look for ?
    Remove duplication
    Improve test
    /!\ List supplementary refactoring ideas for writing corresponding tests later on.
        Focus on coding and repeating the cycle

DEMO
cF /hello-world/Store Locator TODO.md

Test suite for :
`    [ ] - a map chooser function returns an image file name based on a given input`

/src/__tests__/mapChooser.test.js :
```jsx harmony
import mapChooser from '../mapChooser';

describe('mapChooser', () => {
  it('returns portland.jpg when given portland as an input ', () => {
    let expected = 'portland.jpg';
    let actual = mapChooser('portland');
    expect(actual).toBe(expected)
  });
  it('returns astoria.jpg when given astoria as an input ', () => {
    let expected = 'astoria.jpg';
    let actual = mapChooser('astoria');
    expect(actual).toBe(expected)
  });
  it('returns default.jpg when no input is given', () => {
    let expected = 'default.jpg';
    let actual = mapChooser('');
    expect(actual).toBe(expected)
  })
});
```

## Discovering the need for React
DOM - Document Object Model :
Programming API to manipulate the content of Web pages using javascript.
The DOM exposes certain methods and properties that allow you to select elements and change them.
= enables dynamic web pages, changes in place rather than reload

DOM Manipulation is based on DOM methods. Every methods in JQuery or Angular makes calls to DOM methods.

Imperative vs Declarative
Imperative = step by step approach => JQuery, Angular
Declarative = focus on the outcome => React

React DOM Manipulation = telling React what I want the part of the page controlled by React to look like
                            + React handles the rest
                       = Declarative
                       
React Elements
Built-in element for each HTML element
`React.createElement(...)`

React Components
Every component = extension of the React.Component class
                = render() method returning some piece of the UI is responsible for
                
JSX = XML syntax extension to Javascript
    = sort of templating mechanism
    
Composition
Each component in the UI will be built from some combination of other custom components and HTML components.
And all of them will build into a single root component that will be rendered in the browser
using the reactDOM.render() method.


React Data Flow
From the root component to sub-components and children.
The ReactDOM module manages the communication between the React app root and the browser DOM.
= using the Virtual DOM

## Understanding the Virtual DOM
Virtual DOM :
Abstraction of the browser DOM
React holds 2 Virtual DOMs in memory at any point
    Current state of the piece of the browser DOM
    Ideal state as determined by the rendered components using React

Change > Does it affect the display of the component ?
            > the ideal state of the virtual DOM is updated
                > React calculates the difference between the 2 virtual DOMs
                  This difference = what needs to be changed in the actual DOM to match this ideal state
                /!\ What makes React fast is that it can figure out optimized ways to update only the parts of the DOM
                    that need to be updated at any one point

React Development Process
[Thinkin in React](https://reactjs.org/docs/thinkin-in-react)
Recommended steps to build React apps :
    1) Mock
    2) Break up the UI in components hierarchy
    3) Build a static version
    4) Identify the minimal UI State
    5) Identify where the State should live
    6) Add inverse data flow
    
DEMO
----
3) Build a static version
/containers/__tests__/StoreLocator.test.js
Smoke test : testing if it can render without crashing

Without Enzyme :
```jsx harmony
import React from 'react';
import ReactDOM from 'react-dom';

import StoreLocator from '../StoreLocator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreLocator/>, div);
});
```

In TDD, we want to test isolated component without its children.
= Shallow Rendering :
    `npm install --save enzyme enzyme-adapter-react-16 react-test-renderer`
    [To install Enzyme with create-react-app](https://create-react-app.dev/docs/running-tests/)
    Enzyme : testing utility by Airbnb
    +
    /src/setupTests.js
```jsx harmony
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

/!\ Installing Enzyme makes ReactDOM crashes
    Delete /node_modules + run `npm i`
    If all the tests keep failing (Cannot find module 'react' from 'ReactSixteenAdapter.js') :
        run  `npm i --save enzyme-adapter-react-16`

With Enzyme :
```jsx harmony
import React from 'react';
import {shallow} from "enzyme";

import StoreLocator from '../StoreLocator';

it('renders without crashing', () => {
  let mountedStoreLocator = shallow(<StoreLocator/>);
});
```

1) Shallow testing on every single component
2) Shallow testing on the root component to check for the StoreLocator in App.js
3) Shallow testing every child component is rendered in its parent
    Refactor of every tests to a tests suite with describe(...)
= Organised structure
4) Testing every single component to make sure they have the right content
5) Adding styles
    /public/images
    /!\ To import assets, React recommends to use JS imports:
    In Header.test.js
```jsx harmony
   import React from 'react';
   import Header from '../Header';
   import {shallow} from "enzyme";
   
   import importedLogoImage from '../../images/wired-brain-coffee-logo.png';
   
   let mountedHeader;
   beforeEach(() => {
     mountedHeader = shallow(<Header/>);
   });
   
   describe('Header', () => {
     //...
   
     it('renders a logo', () => {
       const logoImage = mountedHeader.find('img').prop('src');
       expect(logoImage).toBe(importedLogoImage);
     });
   });
```
    In Header.js
```jsx harmony
   import React from 'react';
   import logo from '../images/wired-brain-coffee-logo.png';
   
   const Header = () => {
     return (
       <div className="Header">
         <img src={logo} alt="Wired brain logo"/>
       </div>
     );
   };
   export default Header;

```
    /!\ To make create-react-app to compile, we have to move /images in /src.
        Due to create-react-app restrictions on outside /src files
