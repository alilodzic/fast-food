import { Outlet } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Nevbar from "./component/navbar/Nevbar";
import Header from "./pages/header/Header";
function Root() {
  return (
    <>
      <Nevbar />
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
