import "./style.css";
import "../Button/style.css"
import PropTypes from "prop-types";
import {
  LOGIN_ROUTE,
  HOMEPAGE_ROUTE,
  REGISTATION_ROUTE,
} from "../../utils/const";
import { NavLink } from "react-router-dom";

const NavBar = ({ type, logo }) => {
  return (
    <div className={`navbar ${type}`}>
      <div className="navlinks">
        <a className="homelink" href={HOMEPAGE_ROUTE}>
          <img src={logo} className="icon" />
        </a>
        <NavLink className={"navlink"} to={HOMEPAGE_ROUTE}>
          Таблица лидеров
        </NavLink>
      </div>
      <div className="navbuttons">
        <NavLink
          className="button button_text-light button_medium"
          to={LOGIN_ROUTE}
        >
          Войти
        </NavLink>
        <NavLink
          className="button button_filled button_medium"
          to={REGISTATION_ROUTE}
        >
          Зарегистрироваться
        </NavLink>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  type: PropTypes.oneOf(["navbar_map", "navbar_default"]),
  logo: PropTypes.any,
};

export default NavBar;
