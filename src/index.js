import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from 'react-redux'
import watchlistReducer  from './reducers/watchlistReducer'
import { createStore } from 'react-redux'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(watchlistReducer)

root.render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
