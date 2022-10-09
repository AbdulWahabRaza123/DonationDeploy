import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect } from "react";
const Footer = () => {
  const location = useLocation();
  const [news, setNews] = useState([]);
  const getNewsData = async () => {
    try {
      const res = await fetch("/getServicesDataClient", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.message === "done") {
        setNews(data.data);
      } else {
      }
    } catch (e) {
      alert("There is Error ");
    }
  };
  const SetPosts = (props) => {
    return (
      <li>
        <Link
          to="/content"
          state={{ data: props.content }}
          style={{
            color: "black",
            borderBottom: "none",
            textDecoration: "none",
          }}
        >
          {props.headline}
        </Link>
      </li>
    );
  };
  useEffect(() => {
    getNewsData();
    setNews([]);
  }, []);
  return (
    <>
      <div className=" footer-style">
        <div className="container container-fluid">
          <div className="row">
            <div className="col-md-4 container container-fluid">
              <h1>Pegham Foundation</h1>
              <p>
                This is a website where you can donate charity for poor people
                to make life easy for them. So PLease click on Donate to donate
                something for them.
              </p>
            </div>
            <div className="col-md-4 recent_post_list container container-fluid">
              <h1>Latest Post</h1>
              {news.map((val, index) => {
                if (index > 0) {
                  return null;
                } else {
                  return (
                    <SetPosts
                      key={index}
                      headline={val.headline}
                      content={val.newsContent}
                    />
                  );
                }
              })}
              {/* <ul>
                <li>
                  <a href="#post">{news[0].headline}</a>
                </li>
                <li>
                  <a href="#post">{news[1].headline}</a>
                </li>
                <li>
                  <a href="#post">{news[3].headline}</a>
                </li>
                <li>
                  <a href="#post">{news[4].headline}</a>
                </li>
              </ul> */}
              {/* {news.length >= 4 ? (
                <ul>
                  <li>
                    <a href="#post">{news[0].headline}</a>
                  </li>
                  <li>
                    <a href="#post">{news[1].headline}</a>
                  </li>
                  <li>
                    <a href="#post">{news[3].headline}</a>
                  </li>
                  <li>
                    <a href="#post">{news[4].headline}</a>
                  </li>
                </ul>
              ) : news.length === 3 ? (
                <ul>
                  <li>
                    <a href="#post">{news[0].headline}</a>
                  </li>
                  <li>
                    <a href="#post">{news[1].headline}</a>
                  </li>
                  <li>
                    <a href="#post">{news[3].headline}</a>
                  </li>
                </ul>
              ) : news.length === 2 ? (
                <ul>
                  <li>
                    <a href="#post">{news[0].headline}</a>
                  </li>
                  <li>
                    <a href="#post">{news[1].headline}</a>
                  </li>
                </ul>
              ) : news.length === 1 ? (
                <ul>
                  <li>
                    <a href="#post">{news[0].headline}</a>
                  </li>
                </ul>
              ) : null} */}
            </div>
            <div className="col-md-4 container container-fluid">
              <h1>Contact Us</h1>
              <div className="d-flex mt-1">
                <EmailIcon />
                <h6 className="mt-1">
                  &nbsp; welfarefoundationpegham@gmail.com
                </h6>
              </div>
              <div className="d-flex mt-1">
                <PhoneIcon />
                <h6 className="mt-1">&nbsp;03426375178</h6>
              </div>
              <div className="d-flex mt-1">
                <PersonPinCircleIcon />
                <h6 className="mt-1">&nbsp;Ramzan town stadium road daska</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_last">
          <div
            className="container container-fluid d-flex justify-content-start "
            id="footer_last_left"
          >
            <p>All Rights Revered &copy; 2022</p>
            <p className="developer">
              <div className="d-flex">
                <a
                  style={{
                    color: "gray",
                    borderBottom: "none",
                    textDecoration: "none",
                  }}
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example"
                  alt="gmail"
                >
                  <EmailIcon style={{ marginRight: "10px", color: "gray" }} />
                </a>
                <a href="https://www.facebook.com/pegham1" alt="facebook">
                  <FacebookIcon
                    style={{ marginRight: "10px", color: "gray" }}
                  />
                </a>
                <a href="#instagram" alt="instagram">
                  <InstagramIcon
                    style={{ marginRight: "10px", color: "gray" }}
                  />
                </a>
                <a href="#youtube" alt="youtube">
                  <YouTubeIcon style={{ marginRight: "10px", color: "gray" }} />
                </a>
                <a href="https://web.whatsapp.com/" alt="whatsapp">
                  <WhatsAppIcon
                    style={{ marginRight: "10px", color: "gray" }}
                  />
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
