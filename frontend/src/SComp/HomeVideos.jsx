import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import FVideos from "../SComp/FVideos";
const Videos = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 300, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const [fVideos, setFVideos] = useState([]);
  const fVideosData = async () => {
    const res = await fetch("/getFVideos", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.message === "error") {
    } else {
      setFVideos(data.data);
    }
  };
  useEffect(() => {
    setFVideos([{}]);
    fVideosData();
  }, []);
  return (
    <>
      <div className="container container-fluid mt-5 mb-5">
        <div className="text-center mt-5">
          <h1>Featured Videos</h1>
        </div>
      </div>
      <div className="container container-fluid">
        <div className="mt-5">
          <Carousel style={{ color: "green" }} breakPoints={breakPoints}>
            {fVideos.map((val, index) => {
              return <FVideos key={index} title={val.title} src={val.src} />;
            })}
          </Carousel>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Videos;
