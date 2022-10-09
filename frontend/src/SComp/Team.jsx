import React, { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import TeamCard from "./TeamCard";
const Team = () => {
  const [imgArr, setImgArr] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  const getTeam = async () => {
    try {
      const res = await fetch("/getTeam", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "image/jpeg",
        },
      });
      const data = await res.json();
      console.log("This is Team Data ", data);
      for (var i = 0; i < data.imageData.length; i++) {
        const id = data.imageData[i]._id;
        const { name, description } = data.imageData[i];
        setTeamData((val) => {
          return [...val, { id, name, description }];
        });
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
    getTeam();
    setTeamData([]);
    setImgArr([]);
  }, []);
  return (
    <>
      <div className="container container-fluid mt-5 mb-5">
        <div className="text-center">
          <h1>Team</h1>
        </div>
      </div>
      <div className="container container-fluid">
        <div className="mt-5 mb-5">
          <Carousel breakPoints={breakPoints}>
            {imgArr.map((val, index) => {
              return (
                <>
                  <div key={index} className="col-md-4 mt-3">
                    <div className="d-flex">
                      <TeamCard
                        key={index}
                        img={val}
                        id={teamData[index].id}
                        name={teamData[index].name}
                        description={teamData[index].description}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Team;
