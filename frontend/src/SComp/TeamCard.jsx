import React from "react";
const TeamCard = (props) => {
  return (
    <>
      <div className="card team_card_style" style={{ width: "16rem" }}>
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
