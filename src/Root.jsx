import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <div  className="max-w-screen-xl mx-auto px-10">
      <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
