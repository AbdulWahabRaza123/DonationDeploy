import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const HomeCover = () => {
  const [flag, setFlag] = useState(false);
  const [image, setImage] = useState();
  const [imgArr, setImgArr] = useState([]);
  const [imgName, setImgName] = useState([]);
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

  const handleClick = async () => {
    const res = await fetch("/getUploadsCount", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.message === "done") {
      if (data.count > 2) {
        toast.error("You have only limit of 3 Images!", {
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
        axios
          .post("/coverUpload", image, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            toast.success("Image Uploaded Successful!", {
              className: "set_notify",
              position: "top-center",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch((e) => {
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
          });
      }
    }
  };
  const handleFileInput = (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    console.log(
      "File is here ",
      e.target.files[0],
      " name is ",
      e.target.files[0].name
    );
    formData.append("Image", e.target.files[0], e.target.files[0].name);
    setImage(formData);
  };
  const getUploads = async () => {
    try {
      const res = await fetch("/getUploads", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "image/jpeg",
        },
      });
      const data = await res.json();
      for (var i = 0; i < data.imageData.length; i++) {
        const getId = data.imageData[i]._id;
        setImgName((val) => {
          return [...val, getId];
        });
        var arrayBufferView = new Uint8Array(data.imageData[i].Image.data.data);
        const imageBlob = new Blob([arrayBufferView], {
          type: "image/jpeg",
        });
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImgArr((val) => {
          return [...val, imageObjectURL];
        });
      }
    } catch (e) {
      alert("Error!!!");
    }
  };
  const delUpload = async (event) => {
    try {
      const id = event.target.id;
      const res = await fetch("/delUpload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.message === "done") {
        toast.success("Image Deleted Successful!", {
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
      }
    } catch (e) {
      alert("Error!!!");
    }
  };
  useEffect(() => {
    setImgArr([]);
    setImgName([]);
    AuthAdmin();
    getUploads();
  }, []);
  if (flag === true) {
    return (
      <>
        <div className="container container-fluid mt-5 mb-5">
          <div className="container container-fluid mt-5">
            <div className="row mt-3 mb-5">
              {imgArr.map((val, index) => {
                return (
                  <>
                    <div key={index} className="col-md-4 mt-3">
                      <div className="d-flex">
                        <img
                          style={{
                            width: "200px",
                            height: "200px",
                            border: "1px solid black",
                          }}
                          className="img-fluid"
                          src={val}
                          alt="cover"
                        />
                        <button
                          id={imgName[index]}
                          onClick={delUpload}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="d-flex justify-content-center align-content-center">
            <input
              type="file"
              className="mt-2"
              name="Image"
              onChange={handleFileInput}
            />

            <button className="btn btn-success" onClick={handleClick}>
              Upload!
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default HomeCover;
