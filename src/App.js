import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import { Menu } from 'antd';
import Route from "./routes/Route";
import history from './services/history';
import Home from './components/Home';
import Fibonacci from './components/Fibonacci';
import ReplaceNumber from './components/ReplaceNumber';
import Movies from './components/Movies';
import './App.scss';

export default function App() {
  const [menu, setmenu] = useState({ current: 'home' });

  const handleClick = (e) => setmenu({ current: e.key });

  return (
    <Router history={history}>
      <div>
        <Menu onClick={handleClick} selectedKeys={[menu.current]} mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="fibonacci">
            <Link to="/fibonacci">Fibonacci</Link>
          </Menu.Item>
          <Menu.Item key="replaceNumber">
          <Link to="/replaceNumber">Replace Number for AKELAB word</Link>
          </Menu.Item>
          <Menu.Item key="movies">
          <Link to="/movies">Movies</Link>
          </Menu.Item>
        </Menu>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/fibonacci">
            <Fibonacci />
          </Route>
          <Route path="/replaceNumber">
            <ReplaceNumber />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
