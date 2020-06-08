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
        <h1>Users Komponenta</h1>
        <h2>User:{this.props.match.params.id}</h2>
      </div>
    );
  }
}
