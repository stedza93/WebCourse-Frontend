import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
export const Footer = () => {
 const themeContext = useContext(ThemeContext);
 const authContext= useContext(AuthContext)
 console.log(themeContext, authContext)
 return (
 <div>Footer</div>
 );
};
