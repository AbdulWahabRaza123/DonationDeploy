import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { NavContext } from "../../App";
const LogoutAdmin = () => {
  const History = useNavigate();
  const { navDispatch } = useContext(NavContext);
  const logoutFun = async () => {
    try {
      const res = await fetch("/logoutAdmin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.message === "done") {
        navDispatch({ type: "NAV", payload: false });
        toast.success("Logout Successful!", {
          className: "set_notify",
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        History("/");
      } else {
        toast.error("Logout Error!", {
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
    } catch (e) {
      window.alert("Error");
    }
  };
  useEffect(() => {
    logoutFun();
  }, []);
  return <></>;
};
export default LogoutAdmin;
