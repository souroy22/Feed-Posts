import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const DropDown = ({ filtered }) => {
  const [filterBtnName, setFilterBtnName] = useState("Sort");
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "0 60px" }}
    >
      <FontAwesomeIcon
        style={{
          fontSize: "30px",
          color: "#e4e4e7",
          marginTop: "5px",
          marginRight: "5px",
        }}
        icon={faFilter}
      />
      <div className="btn-group mb-2">
        <button
          className="btn btn-light btn-lg dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {filterBtnName}
        </button>
        <ul className="dropdown-menu rounded">
          <li
            onClick={() => {
              setFilterBtnName("Date");
              filtered("date");
            }}
          >
            <a className="dropdown-item" style={{ cursor: "pointer" }}>
              Date
            </a>
          </li>
          <li
            onClick={() => {
              setFilterBtnName("Like");
              filtered("like");
            }}
          >
            <a className="dropdown-item" style={{ cursor: "pointer" }}>
              Like
            </a>
          </li>
          <li
            onClick={() => {
              setFilterBtnName("Views");
              filtered("view");
            }}
          >
            <a className="dropdown-item" style={{ cursor: "pointer" }}>
              View
            </a>
          </li>
          <li
            onClick={() => {
              setFilterBtnName("Share");
              filtered("share");
            }}
          >
            <a className="dropdown-item" style={{ cursor: "pointer" }}>
              Share
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
