import React from "react";
import { BrowserRouter as BR, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Windows from "./pages/more/windows";
import Framing from "./pages/more/framing";
import HomeBuild from "./pages/more/homeBuild";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <BR>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/windows" component={Windows} />
          <Route path="/framing" component={Framing} />
          <Route path="/homebuilding" component={HomeBuild} />
        </Switch>
      </BR>
    </div>
  );
}

export default App;
