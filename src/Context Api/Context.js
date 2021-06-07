import React, { createContext, useState, useEffect } from "react";
import { allPosts } from "../Api Call/Api";

export const PostContext = createContext();

export const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [filterdPosts, setFilterdPosts] = useState([]);

  useEffect(async () => {
    const data = await allPosts();
    setPosts(data);
    console.log(data);
  }, []);

  return (
    <PostContext.Provider
      value={[posts, setPosts, filterdPosts, setFilterdPosts]}
    >
      {props.children}
    </PostContext.Provider>
  );
};
