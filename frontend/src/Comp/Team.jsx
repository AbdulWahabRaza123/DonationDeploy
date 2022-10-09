import React, { useState, useEffect } from "react";
import TeamCard from "../SComp/TeamCard";
const Team = () => {
  const [imgArr, setImgArr] = useState([]);
  const [teamData, setTeamData] = useState([]);
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
          <h3>Team</h3>
        </div>
        <div className="row">
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
        </div>
      </div>
    </>
  );
};

export default Team;
