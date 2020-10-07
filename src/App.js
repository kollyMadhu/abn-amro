import React from "react";
import {
  Switch,
  Route,
  HashRouter as Router,
  withRouter,
} from "react-router-dom";
import ShowsDeshboard from "./app/components/ShowsDeshboard"; 
import ShowDetails from "./app/components/ShowDetails"; 
import  SearchShow from "./app/components/ShowDetails"

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/ShowDetails" component={withRouter(ShowDetails)} />
        <Route exact path="/SearchShow" component={withRouter(SearchShow)} />
          <Route  path="/" component={withRouter(ShowsDeshboard)} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
