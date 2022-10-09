import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
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
      History("/adminLogin");
    } else {
      History("/addVideo");
    }
  };
  useEffect(() => {
    AuthAdmin();
  }, []);
  return <></>;
};

export default Admin;
