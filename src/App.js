import { UserProvider } from "./contexts/UserContext";
import { RoutesMain as Routes } from "./routes";

import { ToastContainer } from "react-toastify";

import "./App.css";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <UserProvider>
        <ToastContainer limit={3} />
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
