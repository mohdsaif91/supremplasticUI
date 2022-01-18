import React from "react";
import ReactDOM from "react-dom";

// import "./index.css";
// import "./bootstrap.min.css";
import App from "./App";
// import store from "./store";
// import { Provider } from "react-redux";

import "./index.scss";

// store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
