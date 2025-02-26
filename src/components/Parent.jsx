import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import image from "../../public/images/logo.png"

const Parent = () => {
  return (
    <>
      <img
        className="logo-metallica"
        src={image}
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
