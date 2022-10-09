import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTeam = () => {
  const [flag, setFlag] = useState(false);
  const History = useNavigate();
  const [image, setImage] = useState();

  const [team, setTeam] = useState({
    name: "",
    description: "",
  });
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
  const handleClick = async (event) => {
    event.preventDefault();
    const { name, description } = team;
    axios
      .post("/addProfile", image, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (res) => {
        if (res.data.message === "done") {
          const res2 = await fetch("/addTeam", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, description }),
          });
          const data2 = await res2.json();
          if (data2.message === "done") {
            toast.success("Data Updated Successful!", {
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
            toast.error("Data Error!", {
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
        } else {
          toast.error("Profile Picture Issue!", {
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
  };
  const handleFileInput = (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("Image", e.target.files[0], e.target.files[0].name);
    setImage(formData);
  };

  const InputHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTeam({ ...team, [name]: value });
  };
  useEffect(() => {
    AuthAdmin();
  }, []);
  if (flag === true) {
    return (
      <>
        <div className="container container-fluid mt-3 mb-3">
          <div className="text-center">
            <h1>Team</h1>
          </div>
        </div>
        <div className="container container-fluid mt-3 mb-5">
          <form>
            <h6 className="mt-2">Enter the Name</h6>
            <input
              type="text"
              name="name"
              value={team.name}
              onChange={InputHandle}
              placeholder="Enter the Name..."
              className="form-control"
            />
            <h6 className="mt-2">Enter the Description</h6>
            <textarea
              type="text"
              name="description"
              value={team.description}
              onChange={InputHandle}
              placeholder="Enter the Description..."
              rows="5"
              className="form-control"
            />
            <div className="mt-2">
              <input
                type="file"
                className="mt-5"
                name="Image"
                onChange={handleFileInput}
              />
              <button className="btn btn-success mt-1" onClick={handleClick}>
                Upload!
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
};

export default AddTeam;
