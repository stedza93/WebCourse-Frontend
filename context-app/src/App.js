import "./App.css";
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
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
