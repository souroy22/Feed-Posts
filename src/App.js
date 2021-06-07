import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "./Context Api/Context";
import Posts from "./Components/Posts/Posts";
import Pagination from "./Components/Pagination/Pagination";
import Loading from "./Components/Loading Screen/Loading";
import DropDown from "./Components/DropDown Menu/DropDown";

const App = () => {
  const [posts, setPosts, filterdPosts, setFilterdPosts, reload, setReload] =
    useContext(PostContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setdataPerPage] = useState(4);
  useEffect(() => {
    // console.log(posts);
  }, [filterdPosts, reload]);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentPageData = filterdPosts?.slice(
    indexOfFirstData,
    indexOfLastData
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const comapreByLike = (post1, post2) => {
    console.log(post1, post2);
    return post1.likes <= post2.likes;
  };
  const filtered = (type) => {
    if (type === "like") {
      setFilterdPosts(posts.sort((a, b) => a.likes - b.likes));
    } else if (type === "view") {
      setFilterdPosts(posts.sort((a, b) => a.views - b.views));
    } else if (type === "share") {
      setFilterdPosts(posts.sort((a, b) => a.shares - b.shares));
    } else if (type === "date") {
      setFilterdPosts(posts.sort((a, b) => a.event_date - b.event_date));
    }
    setReload(!reload);
  };

  return (
    <div className="App">
      <DropDown filtered={filtered} />
      {!posts?.length ? <Loading /> : <Posts postsPerPage={currentPageData} />}

      <Pagination
        dataPerPage={dataPerPage}
        totalData={filterdPosts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
