import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="bg-black w-100">
        <section className="container pt-4">
          <div className="row m-0 p-0">
            <article className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
              <img src="/logoEventPass.png" alt="" className="img-fluid w-50" />
            </article>
            <article className="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
              <h5 className="text-white">Siguenos en:</h5>
              <div></div>
            </article>
            <article className="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-around">
              <h4 className="Link fs-5">Quiénes somos</h4>
              <h4 className="Link fs-5">Atención al cliente</h4>
              <Link to={"/faq"} className="Link fs-5">
                Preguntas Frecuentes
              </Link>
            </article>
          </div>
        </section>
      </footer>
    </>
  );
}
