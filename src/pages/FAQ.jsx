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
          <h1 className="title">Preguntas Frecuentes</h1>
      </banner>
      
      <section className="faqs">
      <div className="card-faq mx-auto">
      <Accordion>
      <Accordion.Item className='mb-4 border-0' eventKey="0">
        <Accordion.Header>¿Cuáles son los medios de pago?</Accordion.Header>
        <Accordion.Body>
          Aceptamos pagos con cualquier tarjeta de crédito, débito o Mercado Pago.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-4 border-0' eventKey="1">
        <Accordion.Header>Quiero comprar las entradas con la tarjeta de una persona que no irá al evento. ¿Qué debo hacer?</Accordion.Header>
        <Accordion.Body>
          Al momento de realizar la compra deberás completar los datos del comprador con los datos del titular de la tarjeta. Una vez realizada la misma, te brindaremos un link de compra desde donde podrás personalizar las entradas.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-4 border-0' eventKey="2">
        <Accordion.Header>Compré entradas y no puedo asistir al evento. ¿Es posible transferir las entradas a otra persona?</Accordion.Header>
        <Accordion.Body>
          Sí. Deberás ingresar al link de compra que te enviamos vía mail cuando realizaste la compra y desde allí podrás cambiar el nombre de las entradas que desees transferir.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-4 border-0' eventKey="3">
        <Accordion.Header>¿Qué debo presentar al momento de ingresar?</Accordion.Header>
        <Accordion.Body>
          En el control de accesos deberás presentar tu entrada impresa o en tu celular. Por seguridad, también te recomendamos asistir con tu DNI.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-4 border-0' eventKey="4">
        <Accordion.Header>¿Cómo funciona el control de accesos?</Accordion.Header>
        <Accordion.Body>
        Realizamos un escaneo de los códigos QR de las entradas para validar acceso y evitar el ingreso de entradas duplicadas o falsificadas, ya que solo es posible acreditar códigos QR que se encuentren en la base de datos del evento una única vez.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-4 border-0' eventKey="5">
        <Accordion.Header>El evento para el que compré entradas fue cancelado. ¿Cómo solicito el reembolso?</Accordion.Header>
        <Accordion.Body>
        Deberás contactarnos, colocando como asunto: REEMBOLSO.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
      </section>
      
      <Footer/>
    </main>
  );
  }
