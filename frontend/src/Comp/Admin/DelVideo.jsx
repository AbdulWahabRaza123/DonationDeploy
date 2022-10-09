import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DelVideosIfram from "./SComp/DelVideosIfram";
import DelFVideos from "./SComp/DelFVideos";
const DelVideo = () => {
  const [flag, setFlag] = useState(false);
  const [videos, setVideos] = useState([]);
  const [fVideos, setFVideos] = useState([]);
  const History = useNavigate();
  const AuthAdmin = async () => {
    const res = await fetch("/authAdmin", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.message === "error") {
      setFlag(false);
      History("/");
    } else {
      setFlag(true);
    }
  };
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
    AuthAdmin();
    setVideos([{}]);
    setFVideos([{}]);
    videosData();
    fVideosData();
  }, []);
  if (flag === true) {
    return (
      <>
        <div className="container container-fluid mt-5 mb-5">
          <div className="text-center">
            <h1>Remove Videos</h1>
          </div>
        </div>
        <div className="container container-fluid">
          <div className="row">
            {videos.map((val, index) => {
              return (
                <DelVideosIfram key={index} title={val.title} src={val.src} />
              );
            })}
          </div>
          <div className="text-center">
            <h3>Featured Videos</h3>
          </div>
          <div className="row">
            {fVideos.map((val, index) => {
              return <DelFVideos key={index} title={val.title} src={val.src} />;
            })}
          </div>
        </div>
      </>
    );
  }
};
export default DelVideo;
