import { Header } from "../components/Header";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Events from "../components/Events";
import { MusicEvents } from "../components/MusicEvents";

// import { Filter } from "../components/Filter";
export function Home() {
  return (
    <>
      <Header />
      <MyNavbar />
      {/* <Filter /> */}
      <Events />
      <MusicEvents />

      <Footer />
    </>
  );
}
