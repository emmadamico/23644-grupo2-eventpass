import "../styles/PopularSports.css";
export function PopularSports() {
  return (
    <article className="col-4 col-md-6 col-lg-4 padding__right">
      <div className="row height__half">
        <div className="col-6 sports__card-bg1 "></div>
        <div className="col-6 sports__card-bg2"></div>
      </div>
      <div className="row height__half">
        <div className="col-6 sports__card-bg3"></div>
        <div className="col-6 sports__card-bg4"></div>
      </div>
    </article>
  );
}
