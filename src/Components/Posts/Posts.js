import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "../../Context Api/Context";
import Post from "../Post/Post";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalContainer from "../Modal/ModalContainer";

AOS.init();

const Posts = ({ postsPerPage }) => {
  const [posts, setPosts, filterdPosts, setFilterdPosts] =
    useContext(PostContext);
  const [isOpen, setIsOpen] = useState(false);
  const [modelData, setModelData] = useState({});
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const openModal = (data) => {
    setModelData(data);
    setIsOpen(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
      data-aos="zoom-in-up"
      data-aos-easing="ease-in-out"
      data-aos-delay="250"
    >
      <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen} post={modelData} />
      {postsPerPage?.length === 0 ? (
        
        <img src={"https://www.cloudconsult.ca/public/no-search-found.png"} style={{marginTop: "60px"}} />
      ) : (
        postsPerPage?.map((post, index) => {
          return (
            <>
              <Post
                openModal={openModal}
                key={index}
                photoUrl={post?.thumbnail_image}
                event_date={post?.event_date}
                event_name={post?.event_name}
                likes={post.likes}
                shares={post.shares}
                views={post.views}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                post={post}
              />
            </>
          );
        })
      )}
    </div>
  );
};

export default Posts;
