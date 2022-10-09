import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ServiceContent = () => {
  const location = useLocation();
  const { data } = location.state;
  const content = () => {
    document.getElementById("addNewsContent").innerHTML = data;
  };
  useEffect(() => {
    content();
  }, []);
  return (
    <>
      <div className="container container-fluid mt-5">
        <h3 style={{ color: "green" }}>
          <b>Service</b>
        </h3>
      </div>
      <div className="container container-fluid mt-3 mb-5 text-white">
        <div className="set_up_news_style text-black">
          <div id="addNewsContent"></div>
        </div>
      </div>
    </>
  );
};

export default ServiceContent;
