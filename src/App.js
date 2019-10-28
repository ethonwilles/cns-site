import React from "react";
import { BrowserRouter as BR, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <BR>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BR>
    </div>
  );
}

export default App;
