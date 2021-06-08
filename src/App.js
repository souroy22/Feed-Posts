import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "./Context Api/Context";
import Posts from "./Components/Posts/Posts";
import Pagination from "./Components/Pagination/Pagination";
import Loading from "./Components/Loading Screen/Loading";
import DropDown from "./Components/DropDown Menu/DropDown";
import { Offline, Online } from "react-detect-offline";


const App = () => {
  const [posts, setPosts, filterdPosts, setFilterdPosts, reload, setReload] =
    useContext(PostContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setdataPerPage] = useState(3);
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
  
  const filtered = (type, updown = 1) => {
    if (type === "like") {
      setFilterdPosts(
        posts.sort((a, b) => (updown ? a.likes - b.likes : b.likes - a.likes))
      );
    } else if (type === "view") {
      setFilterdPosts(
        posts.sort((a, b) => (updown ? a.views - b.views : b.views - a.views))
      );
    } else if (type === "share") {
      setFilterdPosts(
        posts.sort((a, b) =>
          updown ? a.shares - b.shares : b.shares - a.shares
        )
      );
    } else if (type === "date") {
      setFilterdPosts(
        posts.sort((a, b) =>
          updown ? a.event_date - b.event_date : b.event_date - a.event_date
        )
      );
    }
    setReload(!reload);
  };

  const offileSetData = async (data) => {
    await setFilterdPosts(filterdPosts);
    await setPosts(posts);
  };

  const sortIncDec = () => {
    setFilterdPosts(filterdPosts.reverse());
    setReload(!reload);
  };

  return (
    <div className="App">
      <Offline>
        <h1 style={{textAlign: "center", alignItems: "center", color: "red"}}>You are in offline Mode. Please Check your Internet</h1>

        <Posts postsPerPage={currentPageData} />
        <Pagination
          dataPerPage={dataPerPage}
          totalData={filterdPosts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Offline>
      <Online>
      
        <DropDown filtered={filtered} sortIncDec={sortIncDec} />
        {!posts?.length ? (
          <Loading />
        ) : (
          <Posts postsPerPage={currentPageData} />
        )}

        <Pagination
          dataPerPage={dataPerPage}
          totalData={filterdPosts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Online>
    </div>
  );
};

export default App;
