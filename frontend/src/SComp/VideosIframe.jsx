import React from "react";

const VideosIframe = (props) => {
  return (
    <div className="col-md-3 mt-4 mb-4">
      {/* <div className="d-flex"> */}
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
    </div>
    // </div>
  );
};

export default VideosIframe;
