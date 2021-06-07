import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "../../Context Api/Context";
import Post from "../Post/Post";

const Posts = ({ postsPerPage }) => {
  const [posts, setPosts, filterdPosts, setFilterdPosts] =
    useContext(PostContext);
  useEffect(() => {
    // console.log(posts[0]?.event_name);
  }, [posts]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {postsPerPage?.map((post, index) => {
        return (
          <Post
            key={index}
            photoUrl={post?.thumbnail_image}
            event_date={post?.event_date}
            event_name={post?.event_name}
            likes={post.likes}
            shares={post.shares}
            views={post.views}
          />
        );
      })}
    </div>
  );
};

export default Posts;
