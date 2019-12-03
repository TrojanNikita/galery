import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Home, Auth} from '../pages';

import './global.css';
import './app.css';

const App = () => {
  return (
    <main role="main" className="app container">
      <Switch>
        <Route
          path="/"
          component={Home}
          exact />

        <Route
          path="/auth"
          component={Auth}
          />
      </Switch>
    </main>
  );
};

export default App;
