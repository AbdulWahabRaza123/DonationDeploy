import React, { useState, useEffect } from "react";
import "../css/home.css";
import Mission from "../SComp/Mission";
import HomeVideos from "../SComp/HomeVideos";
import Team from "../SComp/Team";
import Box from "../SComp/Box";

import DonateNowForm from "../SComp/DonateNowForm";
const Home = () => {
  const [imgArr, setImgArr] = useState([]);
  const getUploads = async () => {
    try {
      const res = await fetch("/getUploads", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "image/jpeg",
        },
      });
      const data = await res.json();
      for (var i = 0; i < data.imageData.length; i++) {
        var arrayBufferView = new Uint8Array(data.imageData[i].Image.data.data);
        const imageBlob = new Blob([arrayBufferView], {
          type: "image/jpeg",
        });
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImgArr((val) => {
          return [...val, imageObjectURL];
        });
      }
    } catch (e) {
      alert("Error!!!");
    }
  };
  useEffect(() => {
    setImgArr([]);
    getUploads();
    console.log("This is issue ", imgArr);
  }, []);
  return (
    <>
      <header>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner home_bg_fluid_set_mobile">
            <div
              className="carousel-item active"
              style={{
                backgroundImage: `url(${imgArr[0]})`,
              }}
            ></div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: `url(${imgArr[1]})`,
              }}
            ></div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: `url(${imgArr[2]})`,
              }}
            ></div>
          </div>
        </div>
      </header>

      <div className="home">
        <div className="text-center mt-5">
          <h1>Steps to Follow</h1>
        </div>
        <div className="container container-fluid mb-5">
          <div className="row">
            <Box
              name="حدیث"
              data=""
              // btnName=""
            />
            <Box
              name="دعاء"
              data="رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّوَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ

"
              // btnName=""
            />
          </div>
        </div>
      </div>
      <HomeVideos />
      <Mission />
      <Team />
      <DonateNowForm />
    </>
  );
};
export default Home;
