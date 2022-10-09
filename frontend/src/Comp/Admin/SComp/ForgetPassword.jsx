import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ForgetPassword = () => {
  const History = useNavigate();
  const [pinCode, setPin] = useState({
    email: "",
    pin: "",
    password: "",
    cPassword: "",
  });
  const InputHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPin({ ...pinCode, [name]: value });
  };
  const PassChange = async (event) => {
    event.preventDefault();
    const { email, pin, password, cPassword } = pinCode;
    const res = await fetch("/changePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pin,
        password,
        cPassword,
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
      //   navDispatch({ type: "NAV", payload: true });
      toast.success("Password Change Successful!", {
        className: "set_notify",
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      History("/admin");
    }
  };
  return (
    <>
      <div className="container container-fluid">
        <h2 className="text-center mt-5">Forget Password</h2>
      </div>
      <div className="container container-fluid mt-4 mb-3">
        <form method="POST" className="admin_login_style">
          <div className="set_display justify-content-center align-items-center">
            <div className="form-group mt-2">
              <input
                type="text"
                name="email"
                className="form-control"
                style={{ maxWidth: "600px" }}
                placeholder="Email"
                onChange={InputHandle}
                autoComplete="false"
                required="true"
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                name="pin"
                className="form-control"
                style={{ maxWidth: "600px" }}
                placeholder="Pin"
                onChange={InputHandle}
                autoComplete="false"
                required="true"
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                name="password"
                className="form-control"
                style={{ maxWidth: "600px" }}
                placeholder="Password"
                onChange={InputHandle}
                autoComplete="false"
                required="true"
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                name="cPassword"
                className="form-control"
                style={{ maxWidth: "600px" }}
                placeholder="Confirm Password"
                onChange={InputHandle}
                autoComplete="false"
                required="true"
              />
            </div>
            <input
              type="submit"
              onClick={PassChange}
              style={{ marginLeft: "-150px" }}
              className="btn btn-success mt-3 mb-5"
              value="Change"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
