import React from "react";
import Bg from "../images/bg-122.jpg";
const Mission = () => {
  return (
    <>
      <div className="container container-fluid mt-3">
        <h1 className="text-center">Mission</h1>
      </div>
      <div className="container container-fluid set_border_mission">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://jdcwelfare.org/wp-content/uploads/2021/01/jdc1-1.jpg"
              alt="Mission"
              className="img-fluid mission_img_style"
            />
          </div>
          <div className="col-md-6">
            <h1 className="mt-4">
              <b>Mission:</b>
            </h1>
            <h3 style={{ fontSize: "50px" }} className="mt-4">
              Donation Foundation <br />
              Pakistan:
            </h3>
            <p className="mt-4" style={{ fontSize: "18px" }}>
              In 2010, a group of young lads along with the supervision and
              guidance of Molana Muhammad Hasan initiated the unending journey
              which is famously renowned as, The JDC Foundation. It’s a welfare
              that’s charitable and non-proﬁtable registered NGO that began with
              the sole purpose of serving the humanity with its basic needs,
              reaching out to the far-fetched horizons it has embraced till
              date.
            </p>
            <button
              style={{ width: "100px", height: "45px" }}
              className="btn btn-success mt-4"
            >
              More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
