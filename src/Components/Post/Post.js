import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Post = ({ event_date, event_name, likes, shares, views, photoUrl }) => {
  const toUpperCaseFilter = (d) => {
    return d.toUpperCase();
  };
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        height: "400px",
        margin: "20px",
        borderRadius: "15px",
      }}
    >
      <img
        className="card-img-top"
        src={`${photoUrl}`}
        alt="Card image cap"
        style={{
          width: "18rem",
          height: "200px",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{event_name}</h5>
        <p className="card-text">
          <Moment format="D MMM YYYY" filter={toUpperCaseFilter}>
            {event_date}
          </Moment>
        </p>
        <div style={{margin: "0", padding: "5px", display: "flex", justifyContent: "space-around", overflow: "hidden"}}>
          <a className="btn btn-primary">
            {likes}
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                color: "#e4e4e7",
                marginTop: "5px",
                marginRight: "5px",
              }}
              icon={faThumbsUp}
            />
          </a>
          <a href="#" className="btn btn-primary">
            {shares}
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                color: "#e4e4e7",
                marginTop: "5px",
                marginRight: "5px",
              }}
              icon={faShare}
            />
          </a>
          <a href="#" className="btn btn-primary">
            {views}
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                color: "#e4e4e7",
                marginTop: "5px",
                marginRight: "5px",
              }}
              icon={faEye}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
