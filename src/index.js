import ReactDOM from "react-dom";
import App from "./App";
import Showcase from './Showcase';
import reportWebVitals from "./reportWebVitals";
import "./assets/main.scss";

ReactDOM.render(<Showcase />, document.getElementById("root"));
// document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
