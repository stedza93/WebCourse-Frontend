import React, { Component } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

export class Header extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const { isLight, dark, light } = this.context;
    const theme = isLight ? light : dark;
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          const {isAuth, toggleAuth} = authContext;
          return (
            <div style={{ backgroundColor: theme.bg, color: theme.syntax }}>
              <h3>Menu</h3>
              <button onClick={toggleAuth}>{isAuth?'Logout':'Login'}</button>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}
