import React from "react";
export function User(props) {
  function sendToUserPage() {
    window.open(props.userInfo.html_url, "_blank");
  }
  return (
    <div className="card" onClick={sendToUserPage}>
      <div className="image">
        <img src={props.userInfo.avatar_url} />
      </div>
      <div className="content">
        <div className="header">{props.userInfo.name}</div>
        <div className="meta">
          <a>Username: {props.userInfo.login}</a>
        </div>
        <div className="description">{props.userInfo.bio}</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          Repos: {props.userInfo.public_repos}
        </span>
        <span>
          <i className="user icon"></i>
          {props.userInfo.followers}
        </span>
      </div>
    </div>
  );
}
