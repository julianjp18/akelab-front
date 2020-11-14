import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import Route from "./routes/Route";
import history from './services/history';
import Home from './components/Home';
import Fibonacci from './components/Fibonacci';
import ReplaceNumber from './components/ReplaceNumber';
import Movies from './components/Movies';
import './App.scss';

const App = () => (
  <Router history={history}>
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
        <Route path="/" component={Movies} />
        <Route path="/fibonacci" component={Fibonacci} />
        <Route path="/replaceNumber" component={ReplaceNumber} />
        <Route path="/movies" component={Movies} />
        <Route component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
