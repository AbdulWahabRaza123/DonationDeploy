import React, { useEffect, useState } from "react";
import ServiceCard from "../SComp/ServiceCard";
import { toast } from "react-toastify";
const Services = () => {
  const [news, setNews] = useState([]);
  const getNewsData = async () => {
    try {
      const res = await fetch("/getServicesDataClient", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.message === "done") {
        console.log("Data is here ", data);
        setNews(data.data);
      } else {
        toast.error("No Data!", {
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
      alert("There is Error ");
    }
  };

  useEffect(() => {
    getNewsData();
    setNews([]);
  }, []);

  return (
    <>
      <div className="container container-fluid mb-5">
        <div className="row">
          {news.map((val, index) => {
            return (
              <ServiceCard
                key={index}
                headline={val.headline}
                description={val.description}
                content={val.newsContent}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
