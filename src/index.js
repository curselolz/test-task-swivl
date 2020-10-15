import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "Core/redux/store";

import App from "Core/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
