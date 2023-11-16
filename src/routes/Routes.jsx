import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { FAQ } from "../pages/FAQ";
import { NotFound } from "../pages/Error404";
import { Profile } from "../pages/Profile";
import { Tickets } from "../pages/Tickets";
import { Descripcion } from "../pages/Description";
// import { customTicket } from "../pages/TicketCustom";  REVISAR

export function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/descripcion" element={<Descripcion />} />
      <Route path="/micuenta" element={<Profile />} />
      <Route path="/misentradas" element={<Tickets />} />
      {/* <Route path="/misentradas/customticket" element={<customTicket/>} />  REVISAR */}
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
