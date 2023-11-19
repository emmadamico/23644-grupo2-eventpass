import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
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
      <div className="card-user mx-auto"></div>
      <Footer/>
    </main>
  );
  }

