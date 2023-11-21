import { BrowserRouter } from "react-router-dom";
import { Rutas } from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import "./styles/Navbar.css";
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/Events.css";
import "./styles/Fav.css";
import "./styles/Filter.css";

function App() {
  return (
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
