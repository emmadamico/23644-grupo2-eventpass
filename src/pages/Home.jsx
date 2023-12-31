import { Header } from "../components/Header";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Events from "../components/Events";
import { MusicEvents } from "../components/MusicEvents";

import { SportsEvents } from "../components/SportsEvents";

export function Home() {
  return (
    <>
      <Header />
      <MyNavbar />

      <Events />
      <MusicEvents />
      <SportsEvents />

      <Footer />
    </>
  );
}
