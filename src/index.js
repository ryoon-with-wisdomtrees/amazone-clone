import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./components/StateProvider";
import reducer, { initialState } from "./components/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/** initialState = At the Beginning, what does the DataLayer look like
     * reduder = How we solve & manipulate the DataLayer(play with)/ how we dispatch some actions(ex.버튼 누르는거) into the DataLayer. 어떤액션을 동작실행했을 떄, 어떻게 보낼것인지를 조작하는 부분
     */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
