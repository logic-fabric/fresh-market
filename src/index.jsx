import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { App } from "./App/App";

import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { addArticleToBasket } from "./redux/actions";

console.log("initial store =", store.getState());

store.dispatch(addArticleToBasket({ name: "citrons" }, 2));
store.dispatch(addArticleToBasket({ name: "kiwis" }, 3));

console.log("store after 2 dispatches =", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("unsubscribe >", console.log(store.getState()))
);

unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
