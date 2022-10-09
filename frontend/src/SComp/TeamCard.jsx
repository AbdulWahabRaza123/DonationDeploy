import React from "react";
const TeamCard = (props) => {
  return (
    <>
      <div
        className="card team_card_style text-center"
        style={{ width: "16rem", marginLeft: "auto", marginRight: "auto" }}
      >
        <img className="card-img-top" src={props.img} alt="Team Member" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
