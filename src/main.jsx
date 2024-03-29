import React from "react";
//import ReactDOM from "react-dom";
import "./main.css"
import App from "./App";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store"


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);