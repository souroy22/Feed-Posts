import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div style={{ position: "absolute", left: "45%", top: "300px" }}>
      <ReactLoading
        type={"bubbles"}
        color={"gray"}
        height={"150px"}
        width={"150px"}
      />
    </div>
  );
};

export default Loading;
