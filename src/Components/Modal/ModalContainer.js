import React from "react";
import Modal from "react-modal";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareSquare,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ModalContainer = ({ isOpen, setIsOpen, post }) => {
  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "350px",
      display: "flex",
      flexDirection: "row",
      borderRadius: "20px",
    },
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      data-aos="zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="50"
    >
      <div className="modal-container">
        <div className="modal-image">
          <img src={`${post.thumbnail_image}`} />
        </div>
        <div className="modal-mid">
          <div className="modal-mid-text">
            <div className="modal-mid-text-1">
              <h3 className="title">Event Name: </h3>
              <h4 className="event-name">{post.event_name}</h4>
            </div>
            <div className="modal-mid-text-1">
              <h3 className="title">Event Date: </h3>
              <h4 className="event-name">{post.event_date}</h4>
            </div>
          </div>
          <div className="footer-container">
            <a
              className="btn"
              style={{ fontSize: "22px", width: "33%", color: "gray" }}
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
              {post.likes}
            </a>

            <a
              className="btn"
              style={{ fontSize: "22px", width: "33%", color: "gray" }}
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
              {post.views}
            </a>
            <a
              className="btn"
              style={{ fontSize: "22px", width: "33%", color: "gray" }}
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
              {post.shares}
            </a>
          </div>
        </div>
        <button
          className="btn bt-dark font-weight-bolder cross-btn"
          onClick={closeModal}
        >
          X
        </button>
      </div>
    </Modal>
  );
};

export default ModalContainer;
