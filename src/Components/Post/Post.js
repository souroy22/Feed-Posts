import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareSquare,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Title from "react-vanilla-tilt";

const Post = ({ event_date, event_name, likes, shares, views, photoUrl }) => {
  const toUpperCaseFilter = (d) => {
    return d.toUpperCase();
  };
  return (
    <Title
      className="card container"
      options={{
        max: 35,
        speed: 300,
        glare: true,
        "max-glare": 1,
        reverse: true,
        "glare-prerender": false,
        scale: 1.5,
      }}
      style={{
        width: "21rem",
        height: "400px",
        margin: "20px",
        borderRadius: "25px",
        padding: 0,
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <img
        className="card-img-top"
        src={`${photoUrl}`}
        alt="Card image cap"
        style={{
          width: "21rem",
          height: "220px",
          borderTopLeftRadius: "25px",
          borderTopRightRadius: "25px",
          overflow: "hidden",
        }}
      />

      <div className="card-body">
        <h5
          className="card-title font-weight-bold"
          style={{ textAlign: "center", color: "#8D3DAF" }}
        >
          {event_name}
        </h5>
        <p className="card-text">
          <Moment format="D MMM YYYY" filter={toUpperCaseFilter}>
            {event_date}
          </Moment>
        </p>
        <div
          style={{
            margin: "auto",
            padding: "0",
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <a
            className="btn"
            style={{ fontSize: "23px", minWidth: "33%", color: "gray" }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                color: "#E21717",
                marginTop: "5px",
                marginRight: "5px",
              }}
              icon={faHeart}
            />
            {likes}
          </a>

          <a
            className="btn"
            style={{ fontSize: "23px", minWidth: "33%", color: "gray" }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                color: "#4267B2",
                marginTop: "5px",
                marginRight: "5px",
              }}
              icon={faEye}
            />
            {views}
          </a>
          <a
            className="btn"
            style={{ fontSize: "23px", minWidth: "33%", color: "gray" }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                color: "#8D3DAF",
                marginTop: "5px",
                marginRight: "5px",
              }}
              icon={faShareSquare}
            />
            {shares}
          </a>
        </div>
      </div>
    </Title>
  );
};

export default Post;
