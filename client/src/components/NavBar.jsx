import "./style.css";
import PropTypes from "prop-types";
import { LOGIN_ROUTE, HOMEPAGE_ROUTE, REGISTATION_ROUTE } from "../utils/const";
import { NavLink } from "react-router-dom";

const NavBar = ({ type, logo }) => {
  return (
    <div className={`navbar ${type}`}>
      <div className="navlinks">
        <a href={HOMEPAGE_ROUTE}>
          <img src={logo} className="icon" />
        </a>
        <NavLink to={HOMEPAGE_ROUTE}>Таблица лидеров</NavLink>
      </div>
      <div className="navbuttons">
        <NavLink className="button" to={LOGIN_ROUTE}>
          Войти
        </NavLink>
        <NavLink className="button" to={REGISTATION_ROUTE}>
          Зарегистрироваться
        </NavLink>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  type: PropTypes.oneOfType(["navbar_map", "navbar_default"]),
  logo: PropTypes.any,
};

export default NavBar;
