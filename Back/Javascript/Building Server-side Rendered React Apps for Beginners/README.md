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
    Using JSX (Javascript XML) files and Next.js as build system
        JSX Preprocessor
            JSX (Browserify) > Bundle (Webpack) > JS (Babel)
    Building a server-side rendered digital clock
        /!\ HTML Mismatch error
        (cF [screenshot](Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/HTML mismatch error.png))
        --> Important new static method coming : getInitialProps (Next.js)
        
## How server-side rendered HTML must sync with client-side Javascript

## Clean technique for handling async data (REST) on the server
axios : node lib that lets us process REST calls easily
json-server : for dev time, place to get REST data from
              no need to run it on production time
              
## Difference between client and server-side routing