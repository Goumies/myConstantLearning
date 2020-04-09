const rootElement = document.getElementById('app');

const h1Element = document.createElement('h1');
h1Element.className = 'orange';
h1Element.innerText = 'Hello World';

rootElement.appendChild(h1Element);