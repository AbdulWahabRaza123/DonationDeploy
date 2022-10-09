import React from "react";
const FVideos = (props) => {
  return (
    // <div className="col-md-4 mt-4 mb-4">
    //   <div className="display_flex">
    <iframe
      width="300"
      height="200"
      src={props.src}
      title="YouTube video player"
      frameborder="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    //   </div>
    // </div>
  );
};

export default FVideos;
