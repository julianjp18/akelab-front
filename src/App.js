import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Fibonacci from './components/Fibonacci';
import ReplaceNumber from './components/ReplaceNumber';
import Movies from './components/Movies';
import './App.scss';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fibonacci">Fibonacci</Link>
          </li>
          <li>
            <Link to="/replaceNumber">Replace Number for AKALAB</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/fibonacci" component={Fibonacci} />
        <Route path="/replaceNumber">
          <ReplaceNumber />
        </Route>
        <Route path="/movies" component={Movies} />
      </Switch>
    </div>
  </Router>
);

export default App;
