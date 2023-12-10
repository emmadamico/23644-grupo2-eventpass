import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { LoginPasswordChange } from "../pages/LoginPasswordChange";
import { Register } from "../pages/Register";
import { FAQ } from "../pages/FAQ";
import { NotFound } from "../pages/Error404";
import { Profile } from "../pages/Profile";
import { Tickets } from "../pages/Tickets";
import { AboutUs } from "../pages/AboutUs";

import Description from "../pages/Description";

// import { customTicket } from "../pages/TicketCustom";  REVISAR
//ruta de prueba:
import { TicketCustom } from "../pages/TicketCustom";
import { CustomerSupport } from "../pages/CustomerSupport";

export function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/description/:eventId" element={<Description />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/mytickets" element={<Tickets />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/customticket/:ticketData" element={<TicketCustom />} />
      <Route path="/customerSupport" element={<CustomerSupport />} />

      <Route path="/forgot-password" element={<LoginPasswordChange />}/>

      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
