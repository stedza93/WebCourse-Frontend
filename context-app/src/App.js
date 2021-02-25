import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { User } from "./components/Users";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeContext, ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Header></Header>
        <User></User>
        <Footer></Footer>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
