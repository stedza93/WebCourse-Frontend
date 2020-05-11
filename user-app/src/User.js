import React from "react";
export function User(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.userInfo.avatar_url} />
      </div>
      <div className="content">
        <div className="header">{props.userInfo.name}</div>
        <div className="meta">
          <a>Username: {props.userInfo.login}</a>
        </div>
        <div className="description">
        {props.userInfo.bio}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">Repos: {props.userInfo.public_repos}</span>
        <span>
          <i className="user icon"></i>
          {props.userInfo.followers}
        </span>
      </div>
    </div>
  );
}
