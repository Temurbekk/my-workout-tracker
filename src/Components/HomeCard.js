import React from "react";

function HomeCard(props) {
  return (
    <div className="columns is-mobile is-centered is-vcentered">
      <div className="column">
        <img src={props.img} alt="" style={{ height: "25em", width: "45em" }} />
      </div>
      <div className="column">
        <h1 className="title">{props.title}</h1>
        <br />
        <h3 className="subtitle">{props.description}</h3>
      </div>
    </div>
  );
}

export default HomeCard;
