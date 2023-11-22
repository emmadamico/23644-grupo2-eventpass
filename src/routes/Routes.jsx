import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { FAQ } from "../pages/FAQ";
import { NotFound } from "../pages/Error404";
import { Profile } from "../pages/Profile";
import { Tickets } from "../pages/Tickets";
import { About } from "../pages/AboutUs";

import Description from "../pages/Description";

// import { customTicket } from "../pages/TicketCustom";  REVISAR
//ruta de prueba:
import { TicketCustom } from "../pages/TicketCustom"

export function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/description/:eventId" element={<Description />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/mytickets" element={<Tickets />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/mytickets/customticket" element={<customTicket/>} />  REVISAR */}
      {/*Ruta de prueba*/}
      <Route path="/customticket" element={<TicketCustom/>} /> 
      
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
