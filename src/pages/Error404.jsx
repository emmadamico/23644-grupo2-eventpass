import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <section className="vh-100 d-flex flex-column align-items-center justify-content-center gap-5">
        <article className="d-flex gap-3 align-items-center justify-content-center">
          <div className="display-1 border-1 border-end border-dark px-4 text-white">
            404
          </div>
          <div className="fs-2 versalita">Not Found</div>
        </article>
        <article className="d-flex align-items-center gap-5">
          <p className="m-0 p-0 text-white">Página no Encontrada</p>
          <Link to={"/"} className="hover">
            Inicio
          </Link>
        </article>
      </section>
    </>
  );
}
