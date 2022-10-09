import React, { useState, useEffect } from "react";
import ServiceCard from "./SComp/ServiceCard";
function RemoveService() {
  const [flag, setFlag] = useState(false);
  const [news, setNews] = useState([{}]);
  const adminAuth = async () => {
    const res = await fetch("/authAdmin", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    if (data.message === "done") {
      setFlag(true);
    } else {
      setFlag(false);
      History("/error");
    }
  };
  const getNews = async () => {
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
      console.log("Data is ", data);
      if (data.message === "done") {
        setNews(data.data);
      }
    } catch (e) {
      alert("Some error");
    }
  };
  useEffect(() => {
    adminAuth();
    getNews();
    setNews([{}]);
  }, []);
  if (flag === true) {
    return (
      <>
        <div className="container container-fluid mb-5 align-content-center">
          <div className="row">
            {news.map((val, index) => {
              return (
                <ServiceCard
                  key={index}
                  headline={val.headline}
                  description={val.description}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default RemoveService;
