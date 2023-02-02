import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();
  console.error(error);

  return (
  <section className="section-404">
    <div className="text-404">
      <h1>{error.status} </h1>
      <h3>Opps! This page Could Not Be Found!</h3>
      <p>Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
      <p>
      <i>{error.statusText || error.message}</i>
    </p>

    </div>
  </section>

  

  );
}

export default Errorpage