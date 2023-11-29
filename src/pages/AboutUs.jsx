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
      <section className="faqs">
        <div className="card-faq mx-auto">
          <Accordion>
            <Accordion.Item className='mb-4 border-0' eventKey="0">
              <Accordion.Header>Who we are?</Accordion.Header>
              <Accordion.Body>
                We are a group of students learning to be REACT programmers.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <Footer />
    </main>
    
  );
}
