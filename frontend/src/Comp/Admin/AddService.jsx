import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Editor from "./SComp/Editor";
const AddService = () => {
  const [value, setValue] = useState("");
  const History = useNavigate();
  const [flag, setFlag] = useState(false);
  const [news, setNews] = useState({
    headline: "",
    description: "",
  });
  const inputHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNews({ ...news, [name]: value });
  };
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
  const Submit = async (event) => {
    try {
      event.preventDefault();
      const newsContent = value;
      const { headline, description } = news;
      const res = await fetch("/createService", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          headline,
          description,
          newsContent,
        }),
      });
      const data = await res.json();
      if (data.message === "error") {
        toast.error("Service Not Added", {
          className: "set_notify",
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        //   console.log("Error Found");
      } else {
        toast.success("Service Added Successful!", {
          className: "set_notify",
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setNews({
          headline: "",
          description: "",
        });
      }
    } catch (e) {
      alert("Error Found");
    }
  };
  useEffect(() => {
    adminAuth();
  }, []);
  if (flag === true) {
    return (
      <>
        <div className="text-center text-black mt-4">
          <h3>Add Service Content</h3>
        </div>
        <div className="text-white mt-4 container container-fluid">
          <input
            type="text"
            className="headline form-control"
            name="headline"
            autoComplete="off"
            placeholder="Title"
            value={news.headline}
            onChange={inputHandle}
            required
          />
          <textarea
            className="form-control mt-3"
            rows="4"
            name="description"
            placeholder="Description"
            value={news.description}
            onChange={inputHandle}
            required="true"
          />
        </div>
        <div className="container container-fluid mb-5 text-white">
          <div className="mt-3">
            <Editor setValue={setValue} />
          </div>
          <div className="mt-3 mb-5">
            <button className="btn btn-success" onClick={Submit}>
              Add Content
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default AddService;
