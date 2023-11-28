import "../App.css";
import '../styles/faqs.css'
import Accordion from 'react-bootstrap/Accordion';
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function FAQ() {
  return (
    <main>
      <MyNavbar/>
      <banner className='banner-faq'>
        <img
            src="/banner.png"
            alt=""
          />
          <h1 className="title">Frequently Asked Questions</h1>
      </banner>
      
      <section className="faqs">
      <div className="card-faq mx-auto">
      <Accordion>
      <Accordion.Item className='mb-4 border-0' eventKey="0">
        <Accordion.Header>What are the payment methods?</Accordion.Header>
        <Accordion.Body>
        We accept payments with any credit card, debit card, or Mercado Pago.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-4 border-0' eventKey="1">
        <Accordion.Header> I want to buy tickets with a card from someone who will not attend the event, what should I do?</Accordion.Header>
        <Accordion.Body>
        When making the purchase, you will need to fill in the buyer’s details with the cardholder’s details. Once the purchase is made, we will provide you with a purchase link from where you can customize the tickets.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-4 border-0' eventKey="2">
        <Accordion.Header>I bought tickets and I can’t attend the event, is it possible to transfer the tickets to another person?</Accordion.Header>
        <Accordion.Body>
        Yes. You will need to go to the purchase link that we sent you by email when you made the purchase, and from there you can change the name of the tickets you wish to transfer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-4 border-0' eventKey="3">
        <Accordion.Header>What should I present when entering?</Accordion.Header>
        <Accordion.Body>
        At the access control, you will need to present your ticket printed or on your phone. For security, we also recommend you to attend with your ID.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-4 border-0' eventKey="4">
        <Accordion.Header>How does the access control work?</Accordion.Header>
        <Accordion.Body>
        We scan the QR codes of the tickets to validate access and prevent the entry of duplicated or falsified tickets, as it is only possible to accredit QR codes that are in the event database once.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-4 border-0' eventKey="5">
        <Accordion.Header>The event for which I bought tickets was canceled, how do I request a refund?</Accordion.Header>
        <Accordion.Body>
        You should contact us, putting as subject: REFUND.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
      </section>
      <Footer/>
    </main>
  );
  }
