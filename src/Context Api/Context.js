import React, { createContext, useState, useEffect } from "react";
import { allPosts } from "../Api Call/Api";

export const PostContext = createContext();

export const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [filterdPosts, setFilterdPosts] = useState([]);
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    let feed;
    if (localStorage.getItem("feed")) {
      feed = JSON.parse(localStorage.getItem("feed"));
    } else {
      feed = await allPosts();
      localStorage.setItem("feed", JSON.stringify(feed));
    }
    setPosts(feed);
    setFilterdPosts(feed);
    setLoading(false);
  }, []);

  return (
    <PostContext.Provider
      value={[
        posts,
        setPosts,
        filterdPosts,
        setFilterdPosts,
        reload,
        setReload,
      ]}
    >
      {props.children}
    </PostContext.Provider>
  );
};
