import React from "react";
import { toast } from "react-toastify";
const AdminTeamCard = (props) => {
  const delTeam = async (event) => {
    try {
      const id = event.target.id;
      const res = await fetch("/delTeam", {
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
  return (
    <>
      <div className="col-md-4 mt-4">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={props.img} alt="Team Member" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <button onClick={delTeam} id={props.id} className="btn btn-danger">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTeamCard;
