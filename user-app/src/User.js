import React from "react";
export function User() {
  return (
    <div className="card">
      <div className="image">
        <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
      </div>
      <div className="content">
        <div className="header">Matt Giampietro</div>
        <div className="meta">
          <a>Friends</a>
        </div>
        <div className="description">
          Matthew is an interior designer living in New York.
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
