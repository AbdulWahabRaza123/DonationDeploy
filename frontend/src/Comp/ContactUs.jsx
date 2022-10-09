import React from "react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DonateNowForm from "../SComp/DonateNowForm";
const ContactUs = () => {
  return (
    <>
      <div className="container container-fluid mt-5 mb-5">
        <div className="text-center">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="container container-fluid">
        <div className="text-center">
          <div className="row mb-5">
            <div className="col-md-12">
              <iframe
                className="img-fluid"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.121704566555!2d74.33636075!3d32.33544214999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391edbbf7684a45b%3A0xd41c721f99a246b8!2sRamzan%20Town%20Daska%2C%20Sialkot%2C%20Punjab!5e0!3m2!1sen!2s!4v1664905978878!5m2!1sen!2s"
                style={{ border: "0", width: "900px", height: "450px" }}
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <DonateNowForm />
      <div className="container container-fluid mb-5 ml-5">
        <div className="row">
          <div
            className="d-flex justify-content-center align-items-center bg-black text-white mt-2 col-md-4"
            style={{
              border: "1px solid white",
              borderRadius: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <PersonPinCircleIcon
              style={{ color: "#188755", fontSize: "32px" }}
            />
            <h6 style={{}} className="mt-1">
              Address
            </h6>
          </div>
          <div
            className="col-md-8 d-flex justify-content-center align-items-center bg-black text-white mt-2 "
            style={{
              border: "1px solid white",
              borderRadius: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h6 style={{}} className="mt-1">
              Ramzan town stadium road daska
            </h6>
          </div>
        </div>
        <div className="row">
          <div
            className="d-flex justify-content-center align-items-center bg-black text-white mt-2 col-md-4"
            style={{
              border: "1px solid white",
              borderRadius: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <EmailIcon style={{ color: "#188755", fontSize: "30px" }} />
            <h6 style={{}} className="mt-1">
              &nbsp;Email
            </h6>
          </div>
          <div
            className="col-md-8 d-flex justify-content-center align-items-center bg-black text-white mt-2 "
            style={{
              border: "1px solid white",
              borderRadius: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h6 style={{}} className="mt-1">
              welfarefoundationpegham@gmail.com
            </h6>
          </div>
        </div>
        <div className="row">
          <div
            className="d-flex justify-content-center align-items-center bg-black text-white mt-2 col-md-4"
            style={{
              border: "1px solid white",
              borderRadius: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <WhatsAppIcon style={{ color: "#188755", fontSize: "30px" }} />
            <h6 style={{}} className="mt-1">
              &nbsp;Whatsapp
            </h6>
          </div>
          <div
            className="col-md-8 d-flex justify-content-center align-items-center bg-black text-white mt-2 "
            style={{
              border: "1px solid white",
              borderRadius: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h6 style={{}} className="mt-1">
              03426375178
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
