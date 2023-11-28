import "../styles/PopularSports.css";
export function PopularSports() {
  return (
    <article className="col-12 col-md-4 col-lg-4 p-0 m-0 padding__right">
      <div className="row p-0 m-0 height__half">
        <div className="col-6 p-0 m-0 sports__card-bg1" key={"Football"}>
          <div className="versalita text-white glass-bg w-100 px-2 py-1 fw-bold">
            American Football
          </div>
        </div>
        <div className="col-6 p-0 m-0 sports__card-bg2" key={"Basketball"}>
          <div className="versalita text-white glass-bg w-100 px-2 py-1 fw-bold">
            Basketball
          </div>
        </div>
      </div>
      <div className="row p-0 m-0 height__half">
        <div className="col-6 p-0 m-0 sports__card-bg3">
          <div className="versalita text-white glass-bg w-100 px-2 py-1 fw-bold">
            Soccer
          </div>
        </div>
        <div className="col-6 p-0 m-0 sports__card-bg4" key={"Hockey"}>
          <div className="versalita text-white glass-bg w-100 px-2 py-1 fw-bold">
            Hockey
          </div>
        </div>
      </div>
    </article>
  );
}
