import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PostsProvider } from "./Context Api/Context";

ReactDOM.render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
