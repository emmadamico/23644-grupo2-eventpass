import "../styles/HeroText.css";
export function HeroText() {
  return (
    <>
      <section className="p-0 m-0 hero__text-wrapper d-flex align-items-center glass-bg">
        <article className="row m-0 p-0 w-100  hero__text-hover text-bigger">
          <div className="col-12 col-lg-5 p-0 m-0 ">
            <h2 className="p-0 m-0 display-1 fw-bold text-center text-lg-end hero__text-green fst-italic textShadow animate__animated animate__bounce">
              <span>Feel</span>
            </h2>
          </div>
          <div className="col-12 col-lg-2 p-0 m-0 d-flex flex-column justify-content-center">
            <p className="m-0 p-0 px-md-3 px-0 fs-4 text-white text-center text-lg-start textShadow animate__animated animate__zoomIn">
              the moment,
            </p>
            <p className="m-0 p-0  fs-4 text-center text-lg-end text-white animate__animated animate__bounce">
              <span className="hero__text-green fst-italic fw-bold textShadow">enjoy </span>{" "}
               the
            </p>
          </div>
          <div className="col-12 col-lg-5 p-0 m-0 ">
            <h2 className="p-0 m-0 display-1 text-center text-lg-start text-white textShadow animate__animated animate__zoomIn">
              Life
            </h2>
          </div>
        </article>        
      </section>
    </>
  );
}


