import { UserProvider } from "./contexts/UserContext";
import { RoutesMain as Routes } from "./routes";

import "./App.css";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
