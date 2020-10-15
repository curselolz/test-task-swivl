import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from 'routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          return route.component ? (
            <Route
              key={index}
              exact={route.isExact}
              path={route.path}
              component={route.component}
            />
          ) : null;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
