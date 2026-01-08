import { Outlet } from "react-router";

// my components
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* Outlet component gets filled with 'Child components' based on route path. */}
      <Footer />
    </div>
  );
};

export default Body;
