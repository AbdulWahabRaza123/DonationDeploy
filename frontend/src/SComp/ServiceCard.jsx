import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ServiceImg from "../images/news.jpg";
const ServiceCard = (props) => {
  const History = useNavigate();
  return (
    <div className="col-md-4 mt-5">
      <div className="card" style={{ width: "22rem" }}>
        <Link
          to="/content"
          state={{ data: props.content }}
          style={{
            color: "black",
            borderBottom: "none",
            textDecoration: "none",
          }}
        >
          <img src={ServiceImg} className="card-img-top" alt="Service" />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{props.headline}</h5>
          <p className="card-text">{props.description}</p>

          <div className="d-flex">
            <button
              className="btn btn-primary"
              onClick={() => {
                History("/content", {
                  state: { data: props.content },
                });
              }}
            >
              Read More
            </button>
            <button
              style={{ marginLeft: "10px" }}
              className="btn btn-success"
              onClick={() => {
                History("/donateNow");
              }}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
