import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAmountDown,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";

const DropDown = ({ filtered, sortIncDec }) => {
  const [filterBtnName, setFilterBtnName] = useState("Sort");
  const [sorting, setSorting] = useState(true);
  useEffect(() => {}, [sorting, filterBtnName]);
  console.log(filterBtnName);
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "0 60px" }}
    >
      {sorting ? (
        <FontAwesomeIcon
          style={{
            fontSize: "30px",
            color: "#00D84A",
            marginTop: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            if (filterBtnName === "Sort") {
              return;
            }
            sortIncDec();
            setSorting(!sorting);
          }}
          icon={faSortAmountUp}
        />
      ) : (
        <FontAwesomeIcon
          style={{
            fontSize: "30px",
            color: "#00D84A",
            marginTop: "10px",
            marginRight: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            if (filterBtnName === "Sort") {
              return;
            }
            sortIncDec();
            setSorting(!sorting);
          }}
          icon={faSortAmountDown}
        />
      )}
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
        <ul
          className="dropdown-menu dropdown-light"
          style={{
            // backgroundColor: "#1b3d46",
            borderRadius: "25px",
            borderTopLeftRadius: "0",
            padding: "3px",
            overflow: "hidden"
          }}
        >
          <li
            onClick={() => {
              setFilterBtnName("Date");
              filtered("date", sorting);
            }}
          >
            <a className="dropdown-item" style={{ cursor: "pointer" }}>
              Date
            </a>
          </li>
          <li
            onClick={() => {
              setFilterBtnName("Like");
              filtered("like", sorting);
            }}
          >
            <a className="dropdown-item" style={{ cursor: "pointer" }}>
              Like
            </a>
          </li>
          <li
            onClick={() => {
              setFilterBtnName("Views");
              filtered("view", sorting);
            }}
          >
            <a className="dropdown-item" style={{ cursor: "pointer" }}>
              View
            </a>
          </li>
          <li
            onClick={() => {
              setFilterBtnName("Share");
              filtered("share", sorting);
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
