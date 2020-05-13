import React from "react";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} style={{width: 200, height: 300}}/>
      </div>
      <div className="content" style={{textAlign: "left"}}>
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
