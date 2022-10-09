import React from "react";
import ServiceImg from "../../../images/news.jpg";
import { toast } from "react-toastify";
const ServiceCard = (props) => {
  const deleteService = async () => {
    try {
      const headline = props.headline;
      const res = await fetch("/deleteService", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ headline }),
      });
      const data = await res.json();
      if (data.message === "done") {
        toast.success("Deleted Successfully!", {
          className: "set_notify",
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Delete Error!", {
          className: "set_notify",
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (e) {
      alert("Error");
    }
  };
  return (
    <div className="col-md-4 mt-5">
      <div className="card" style={{ width: "18rem", marginLeft: "25px" }}>
        <img src={ServiceImg} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">{props.headline}</h5>
          <p className="card-text">{props.description}</p>
          <button className="btn btn-danger" onClick={deleteService}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
