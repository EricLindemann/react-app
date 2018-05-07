import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { addArticle } from "../js/actions/index";

import store from "./store/index";
import App from "./components/App";

window.store = store;
window.addArticle = addArticle;
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);