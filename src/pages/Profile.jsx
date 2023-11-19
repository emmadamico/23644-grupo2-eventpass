import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/profile.css'


export function Profile() {
  return (
    <main>
      <MyNavbar/>
      <banner className='banner'>
        <img
            src="/banner.png"
            alt=""
          />
          <h1 className="title">Mi cuenta</h1>
          <p>Modifica tus datos de cuenta y contacto</p>
      </banner>
      <div className="card-user mx-auto">
        <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="info-user" title="Información personal">
          Tab content for Home
        </Tab>
        <Tab eventKey="password" title="Contraseña">
          Tab content for Loooonger Tab
        </Tab>
      </Tabs>
      </div>
      <Footer/>
    </main>
  );
  }

