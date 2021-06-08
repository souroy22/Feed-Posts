import React from "react";
import "./Pagination.css";

const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let indx = 1; indx <= Math.ceil(totalData / dataPerPage); indx++) {
    pageNumbers.push(indx);
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "45px",
        width: "100%",
      }}
    >
      <ul className="pagination">
        {pageNumbers.length > 1 &&
          pageNumbers.map((number, index) => (
            <li key={number + index} className="page-item hoverEffect m-2">
              <a
                onClick={() => paginate(number)}
                className="page-link acontainer text-light font-weight-bold rounded-li"
              >
                {number}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
