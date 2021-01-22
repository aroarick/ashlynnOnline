import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./views/home";
import Navigation from "./views/navbar";

import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  const myInput = useRef();
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

AOS.init();

export default App;
