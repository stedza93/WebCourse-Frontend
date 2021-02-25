import React, { createContext, Component } from "react";

export const AuthContext = createContext();

export class AuthContextProvider extends Component {
  state = {
    isAuth: false
  };
  toggleAuth = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
