import React from "react";
export class Users extends React.Component {
  state = {
    user: "Users",
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <br />
        <h1>{this.state.user}</h1>
      </div>
    );
  }
}
