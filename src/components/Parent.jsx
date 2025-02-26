import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";

const Parent = () => {
  return (
    <>
      <img
        className="logo-metallica"
        src="public/images-ex-164/logo.png"
        alt="logo"
      />

      <nav className="logo">
        <NavLink to="vocals" className="logo">
          VOCALS
        </NavLink>
        <NavLink to="guitar" className="logo">
          GUITAR
        </NavLink>
        <NavLink to="bass" className="logo">
          BASS
        </NavLink>
        <NavLink to="drums" className="logo">
          DRUMS
        </NavLink>
            <Outlet />
      </nav>

    </>
  );
};
export default Parent;
