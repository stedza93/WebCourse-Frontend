import "./App.css";
import { AgeButtons } from "./components/AgeButtons";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { User } from "./components/Users";
import {  AgeContextProvider } from "./context/ageContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeContext, ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <AgeContextProvider>
    <AuthContextProvider>
      <ThemeContextProvider>
        <Header></Header>
        <User></User>
        <AgeButtons></AgeButtons>
        <Footer></Footer>
      </ThemeContextProvider>
    </AuthContextProvider>
    </AgeContextProvider>
  );
}

export default App;
