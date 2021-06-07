import React, { createContext, useState, useEffect } from "react";
import { allPosts } from "../Api Call/Api";

export const PostContext = createContext();

export const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [filterdPosts, setFilterdPosts] = useState([]);
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const data = await allPosts();
    setPosts(data);
    setFilterdPosts(data);
    // setReload(false);
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
