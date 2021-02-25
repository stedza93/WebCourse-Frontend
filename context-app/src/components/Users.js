import React, { Component } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

export class User extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          const { isAuth } = authContext;
          return (
            <ThemeContext.Consumer>
              {(context) => {
                const { isLight, dark, light, toggleTheme } = context;
                const theme = isLight ? light : dark;
                return (
                  <div
                    style={{ backgroundColor: theme.bg, color: theme.syntax }}
                  >
                    {isAuth ? (
                      <p>Korisnik je ulogvan</p>
                    ) : (
                      <p>Nepoznat korisnik</p>
                    )}
                    <p>USER 1</p>
                    <p>USER 2</p>
                    <p>USER 3</p>
                    <button onClick={toggleTheme}>Toggle theme</button>
                  </div>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}
