import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "./Context Api/Context";

const App = () => {
  const [posts, setPosts, filterdPosts, setFilterdPosts] =
    useContext(PostContext);
  useEffect(() => {
    console.log(posts);
  });
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h1>Hello World!</h1>
    </div>
  );
};

export default App;
