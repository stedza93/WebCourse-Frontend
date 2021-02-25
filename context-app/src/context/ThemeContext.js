import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  state = {
    isLight: false,
    light: { bg: "#eee", syntax: "#555", ui: "ddd" },
    dark: { bg: "#555", syntax: "#eee", ui: "333" },
  };
  toggleTheme = () => {
    this.setState({ isLight: !this.state.isLight });
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme:this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
