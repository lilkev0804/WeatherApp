import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContainerWeather from "./screens/ContainerWeather";
import Form from "./screens/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"><Form></Form></Route>
          <Route path="/:lat-:long"><ContainerWeather></ContainerWeather></Route>
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
