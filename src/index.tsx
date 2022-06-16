// import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

// react v.17
// ReactDOM.render(
//   <BrowserRouter basename={process.env.PUBLIC_URL}>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
