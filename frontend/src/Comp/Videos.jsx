import React, { useState, useEffect } from "react";
import VideosIframe from "../SComp/VideosIframe";
const Videos = () => {
  const [videos, setVideos] = useState([]);
  const videosData = async () => {
    const res = await fetch("/getVideos", {
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
      setVideos(data.data);
    }
  };
  useEffect(() => {
    setVideos([{}]);
    videosData();
  }, []);
  return (
    <>
      <div className="container container-fluid mt-5 mb-5">
        <div className="text-center">
          <h1>Videos</h1>
        </div>
      </div>
      <div className="container container-fluid">
        <div className="row mb-5">
          {videos.map((val, index) => {
            return <VideosIframe key={index} title={val.title} src={val.src} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Videos;
