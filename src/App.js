import { UserProvider } from "./contexts/UserContext";
import { RoutesMain as Routes } from "./routes";

import "./App.css";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";

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
