import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminAddVideo from "../../images/adminAddVideos.jpg";
const AddVideo = () => {
  const [flag, setFlag] = useState(false);
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
  const [video, setVideo] = useState({
    title: "",
    src: "",
  });
  const InputHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setVideo({ ...video, [name]: value });
  };
  const postVideo = async (event) => {
    event.preventDefault();
    const { title, src } = video;
    const res = await fetch("/createVideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        src,
      }),
    });
    const data = await res.json();
    if (data.message === "error") {
      toast.error("Invalid Error!", {
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
      toast.success("Video Successfully Added!", {
        className: "set_notify",
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setVideo({
        title: "",
        src: "",
      });
    }
  };
  const postHomeVideo = async (event) => {
    event.preventDefault();
    const { title, src } = video;
    const res = await fetch("/createFVideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        src,
      }),
    });
    const data = await res.json();
    if (data.message === "error") {
      toast.error("Invalid Error!", {
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
      toast.success("Video Successfully Added!", {
        className: "set_notify",
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setVideo({
        title: "",
        src: "",
      });
    }
  };
  useEffect(() => {
    AuthAdmin();
  }, []);
  if (flag === true) {
    return (
      <>
        <div className="container container-fluid mt-5">
          <div className="text-center">
            <h1>Add Videos</h1>
          </div>
        </div>
        <div className="container container-fluid mt-5 mb-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={AdminAddVideo}
                alt="AdminAddVideos"
                className="img-fluid add_video_image_style"
              />
            </div>
            <div className="col-md-6 mt-5">
              <form>
                <div className="mt-5">
                  <h6>Enter Video Title:</h6>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  placeholder="Enter Video Title..."
                  value={video.title}
                  onChange={InputHandle}
                />
                <div className="mt-3">
                  <h6>Enter Video Link:</h6>
                </div>
                <input
                  className="form-control"
                  type="text"
                  name="src"
                  placeholder="Enter Video Link..."
                  value={video.src}
                  onChange={InputHandle}
                />
                <div className="d-flex">
                  &nbsp;
                  <div className="mt-4">
                    <button onClick={postVideo} className="btn btn-success">
                      Add to Videos
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={postHomeVideo} className="btn btn-success">
                      Featured Video
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AddVideo;
