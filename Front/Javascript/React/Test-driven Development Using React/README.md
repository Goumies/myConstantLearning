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


## 

