import "../App.css";
import '../styles/faqs.css'
import Accordion from 'react-bootstrap/Accordion';
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function About() {
  return (
    <main>
      <MyNavbar />
      <banner className='banner-faq'>
        <img
          src="/banner.png"
          alt=""
        />
        <h1 className="title">About Us</h1>
      </banner>

      <section className="aboutus">
        <div className="card-faq mx-auto">
          
        </div>
      </section>
      <Footer />
    </main>
  );
}
