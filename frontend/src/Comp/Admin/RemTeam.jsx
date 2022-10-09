import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminTeamCard from "./SComp/AdminTeamCard";

const RemTeam = () => {
  const [flag, setFlag] = useState(false);
  const History = useNavigate();
  const [imgArr, setImgArr] = useState([]);
  const [teamData, setTeamData] = useState([]);
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
      setFlag(false);
      History("/");
    } else {
      setFlag(true);
    }
  };
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
    setTeamData([]);
    setImgArr([]);
    AuthAdmin();
    getTeam();
  }, []);
  if (flag === true) {
    return (
      <>
        <div className="container container-fluid mt-5 mb-5">
          <div className="text-center">
            <h3>Remove Team</h3>
          </div>
        </div>
        <div className="container container-fluid">
          <div className="row mb-5">
            {imgArr.map((val, index) => {
              return (
                <>
                  <div key={index} className="col-md-4 mt-3">
                    <div className="d-flex">
                      <AdminTeamCard
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
  }
};

export default RemTeam;
