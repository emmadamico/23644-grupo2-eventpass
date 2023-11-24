import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export function Footer() {
  return (
    <>
      <footer className="footer__bg w-100 ">
        <section className="container py-4 ">
          <div className="row m-0 p-0">
            <article className="col-12 col-md-6 col-lg-4 order-1 ">
              <Link
                to={"/"}
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  src="/logoEventPass.png"
                  alt=""
                  className="img-fluid w-50"
                />
              </Link>
            </article>
            <article className="col-12  col-lg-4 order-3 order-lg-2 mt-5 mt-lg-0 d-flex flex-column align-items-center justify-content-center">
              <h5 className="text-white">Follow Us</h5>
              <div className="d-flex align-items-center gap-4 mt-3">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook fs-4" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram fs-4" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter fs-4"></i>
                </a>
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4 order-2 order-lg-3 mt-5 mt-md-0  d-flex flex-column align-items-center align-items-md-start justify-content-center gap-2">
              <Link to={"/about"} className="Link fs-5 ">
                About Us
              </Link>
              <Link to={"#"} className="Link fs-5">
                Customer Support
              </Link>
              <Link to={"/faq"} className="Link fs-5">
                Frequent Questions
              </Link>
            </article>
          </div>
        </section>
      </footer>
    </>
  );
}
