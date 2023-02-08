import { Outlet } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Header from "./pages/header/Header";
function Root() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
