import React, { useState } from "react";
import DonateNowImg from "../images/contactUsImg.jpg";
const DonateNowForm = () => {
  const [btn1, setBtn1] = useState("btn btn-success");
  const [btn2, setBtn2] = useState("btn btn-success");
  const [btnAmount, setBtnAmount] = useState("");
  const [donate, setDonate] = useState({
    amount: "",
    fName: "",
    lName: "",
    cCNum: "",
    sCode: "",
    cExpire: "",
  });
  const InputHandle = (event) => {
    const name = event.target.name;
    if (name === "amount") {
      setBtnAmount("");
      setBtn1("btn btn-success");
      setBtn2("btn btn-success");
    }
    const value = event.target.value;
    setDonate({ ...donate, [name]: value });
  };
  const PostDataDonate = async (event) => {
    event.preventDefault();
    // const { amount, fName, lName, cCNum, sCode, cExpire } = donate;
  };
  return (
    <>
      <div className="container container-fluid set_border_mission mt-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={DonateNowImg}
              alt="donateNow"
              className="img-fluid mission_img_style"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h1>Donate Now</h1>
            {/* <div className="d=flex mt-3 mb-3">
              <button
                style={{
                  width: "100px",
                  height: "50px",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
                onClick={() => {
                  if (btn1 === "btn btn-success") {
                    setBtn1("btn btn-primary");
                    setBtn2("btn btn-success");
                    setBtnAmount("5");
                    // setDonate({
                    //   amount: "",
                    // });
                  } else {
                    setBtn1("btn btn-success");
                  }
                }}
                className={btn1}
              >
                5$
              </button>
              <button
                style={{
                  width: "100px",
                  height: "50px",
                  fontSize: "20px",
                  marginLeft: "20px",
                }}
                onClick={() => {
                  if (btn2 === "btn btn-success") {
                    setBtn2("btn btn-primary");
                    setBtn1("btn btn-success");
                    setBtnAmount("10");
                    // setDonate({
                    //   amount: "",
                    // });
                  } else {
                    setBtn2("btn btn-success");
                  }
                }}
                className={btn2}
              >
                10$
              </button>
            </div> */}

            <input
              style={{
                maxWidth: "300px",
                height: "48px",
                borderRadius: "5px",
                padding: "15px",
                marginLeft: "10px",
              }}
              className="mb-4 mt-4"
              placeholder="$ Donate"
              name="amount"
              value={donate.amount}
              onChange={InputHandle}
            />

            <div className="row">
              <form>
                <h4 className="mb-3">Credit Card Information:</h4>
                <div className="d-flex">
                  <div className="col-md-5" style={{ marginLeft: "10px" }}>
                    <input
                      className="form-control"
                      name="fName"
                      placeholder="First Name"
                      value={donate.fName}
                      onChange={InputHandle}
                    />
                  </div>
                  <div className="col-md-5" style={{ marginLeft: "25px" }}>
                    <input
                      className="form-control"
                      name="lName"
                      value={donate.lName}
                      onChange={InputHandle}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="d-flex">
                    <div className="col-md-5" style={{ marginLeft: "10px" }}>
                      <input
                        className="form-control"
                        name="cCNum"
                        value={donate.cCNum}
                        onChange={InputHandle}
                        placeholder="Credit Card Number"
                      />
                    </div>

                    <div className="col-md-5" style={{ marginLeft: "25px" }}>
                      <input
                        className="form-control"
                        name="sCode"
                        value={donate.sCode}
                        onChange={InputHandle}
                        placeholder="Security Code (CVC)"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    {/* <div className="d-flex"> */}
                    <div className="col-md-11" style={{ marginLeft: "10px" }}>
                      <input
                        className="form-control"
                        name="cExpire"
                        value={donate.cExpire}
                        onChange={InputHandle}
                        placeholder="Card Expiration (MM/YY)"
                      />
                      <button
                        onClick={PostDataDonate}
                        className="btn btn-success mt-4"
                      >
                        Donate
                      </button>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateNowForm;
