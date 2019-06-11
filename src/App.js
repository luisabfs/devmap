import React from "react";
import "./config/ReactotronConfig";

import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";

import store from "./store";
import Routes from "./routes";

import "./styles.css";

const App = () => (
  <Provider store={store}>
    <Routes />
    <ToastContainer />
  </Provider>
);

export default App;
