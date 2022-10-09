import React from "react";
const Box = (props) => {
  return (
    <>
      {" "}
      <div className="col-md-4 container container-fluid ">
        <div className="text-center set_box_style d-flex justify-content-center align-items-center">
          <h3
            className="mt-3"
            style={{ color: "#188755", fontWeight: "bolder", fontSize: "33px" }}
          >
            {props.name}
          </h3>
          <p style={{ fontSize: "30px" }}>{props.data}</p>
          {/* <button className="btn btn-success mt-3">{props.btnName}</button> */}
        </div>
      </div>
    </>
  );
};
export default Box;
