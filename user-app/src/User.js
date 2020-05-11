import React from "react";
export function User(props) {
  return (
    <div className="card">
      <div className="image">
        <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
      </div>
      <div className="content">
        <div className="header">{props.userInfo.name}</div>
        <div className="meta">
          <a>{props.userInfo.job}</a>
        </div>
        <div className="description">
        {props.userInfo.bio}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">Joined in 2013</span>
        <span>
          <i className="user icon"></i>
          75 Friends
        </span>
      </div>
    </div>
  );
}
