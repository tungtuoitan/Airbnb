import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index2.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./config/configureStore";


const handleRender = () => {
  console.log("vừa render nè!")
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Profiler id="abcde" onRender={handleRender}>
          <App />
        </Profiler>
      </Provider>
    </BrowserRouter>
   </React.StrictMode>
);