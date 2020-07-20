import React from 'react';
import Route from "react-router-dom/es/Route";

import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";

/*
  React Router uses partial matching and returns the first match
  "/" & "/profile" make the router navigate to "/"

  exact attribute disables the partial matching
*/

function App() {
  return (
      <>
        <Nav/>
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </div>
      </>
  );
}

export default App;
