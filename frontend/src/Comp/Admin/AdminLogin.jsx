import React, { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { NavContext } from "../../App";
const AdminLogin = () => {
  const { navDispatch } = useContext(NavContext);
  const [pShow, setPShow] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const History = useNavigate();
  const changePState = () => {
    if (pShow === true) {
      setPShow(false);
    } else {
      setPShow(true);
    }
  };
  const loginInputHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLogin({ ...login, [name]: value });
  };
  const PostDataLogin = async (event) => {
    event.preventDefault();
    console.log(login);
    const { email, password } = login;
    const res = await fetch("/loginAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log("Data is here ", data);
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
      navDispatch({ type: "NAV", payload: true });
      toast.success("Login Successful!", {
        className: "set_notify",
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      History("/homeCover");
    }
  };
  return (
    <>
      <div className="container container-fluid">
        <h2 className="text-center mt-5">Login</h2>
      </div>
      <div className="container container-fluid mt-4 mb-3">
        <form method="POST" className="admin_login_style">
          <div className="set_display justify-content-center align-items-center">
            <div className="form-group mt-2">
              <input
                type="email"
                name="email"
                className="form-control"
                style={{ maxWidth: "600px" }}
                placeholder="Email"
                onChange={loginInputHandle}
                autoComplete="false"
                required="true"
              />
            </div>

            <div className="password_login form-group mt-4">
              <input
                type={pShow ? "text" : "password"}
                className="form-control"
                style={{ maxWidth: "600px" }}
                placeholder="Password"
                name="password"
                onChange={loginInputHandle}
                required="true"
              />

              <div className="d-flex justify-content-start mt-2">
                <input type="checkbox" onClick={changePState} />
                <span>&nbsp;Show?</span>
                <span style={{ marginLeft: "40px" }}>
                  <NavLink style={{ color: "#188755" }} to="/fPassword">
                    Forget Password?
                  </NavLink>
                </span>
              </div>
            </div>
            <input
              type="submit"
              onClick={PostDataLogin}
              style={{ marginLeft: "-150px" }}
              className="btn btn-success mt-3 mb-5"
              value="Login"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
