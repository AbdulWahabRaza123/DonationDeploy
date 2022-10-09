import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const NavAbove = () => {
  return (
    <>
      <div className="bg-black text-color nav_above_set_border">
        <div className="pt-3 pb-1 d-flex container-fluid change_flex_wrap ml_nav_above container">
          <p className="email_nav_above mt-1">
            <EmailIcon
              style={{
                color: "#188755",
                marginTop: "-1px",
                fontWeight: "bolder",
              }}
            />{" "}
            <a
              style={{
                marginTop: "5px",
                color: "white",
                fontWeight: "bolder",
                borderBottom: "none",
                textDecoration: "none",
              }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example"
              alt="gmail"
            >
              welfarefoundationpegham@gmail.com
            </a>
          </p>
          <p className="phone_nav_above mt-1">
            <WhatsAppIcon style={{ color: "#188755", fontWeight: "bolder" }} />{" "}
            <span style={{ color: "white", fontWeight: "bolder" }}>
              +92 3426375178
            </span>
          </p>
          <p className="phone_nav_above mt-1">
            <PersonPinCircleIcon
              style={{ color: "#188755", fontWeight: "bolder" }}
            />{" "}
            <span style={{ color: "white", fontWeight: "bolder" }}>
              Ramzan town stadium road daska
            </span>
          </p>
          <div style={{ marginLeft: "auto" }}>
            <a
              style={{
                borderBottom: "none",
                textDecoration: "none",
              }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example"
              alt="gmail"
            >
              <EmailIcon
                style={{
                  marginRight: "10px",
                  color: "white",
                  fontWeight: "bolder",
                }}
              />
            </a>
            <a
              // style={{ marginLeft: "auto" }}
              href="https://www.facebook.com/pegham1"
              alt="facebook"
            >
              <FacebookIcon
                style={{
                  marginRight: "10px",
                  color: "white",
                  fontWeight: "bolder",
                }}
              />
            </a>
            <a href="#instagram" alt="instagram">
              <InstagramIcon style={{ color: "white", marginRight: "10px" }} />
            </a>
            <a href="#youtube" alt="youtube">
              <YouTubeIcon style={{ marginRight: "10px", color: "white" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavAbove;
