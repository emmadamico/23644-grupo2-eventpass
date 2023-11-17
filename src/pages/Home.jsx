import { Header } from "../components/Header";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Events from "../components/Events";


export function Home() {
  return (
    <>
      <Header />
      <MyNavbar />
      <Events />
      <Footer />
    </>
  );
}
