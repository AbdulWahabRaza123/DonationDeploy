import React from "react";
import { toast } from "react-toastify";
const DelFVideos = (props) => {
  const delFVideo = async () => {
    const title = props.title;
    const res = await fetch("/remFVideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
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
      toast.success("Video Deleted Successful!", {
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
  };
  return (
    <div className="col-md-3 mt-4 mb-4">
      <div className="display_flex">
        <iframe
          style={{ border: "2px solid black" }}
          width="230"
          height="130"
          src={props.src}
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>{props.title}</p>

        <button onClick={delFVideo} className="btn btn-danger">
          Remove
        </button>
      </div>
    </div>
  );
};

export default DelFVideos;
