import "./style.css";
import {
  LOGIN_ROUTE,
  HOMEPAGE_ROUTE,
  REGISTATION_ROUTE,
  PROFILE_ROUTE,
} from "../../utils/const";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import { BiUser, BiExit } from "react-icons/bi";

const NavBar = observer(({ type, logo }) => {
  const { user } = useContext(Context);

  return (
    <div className={`navbar ${type}`}>
      <div className="navlinks">
        <a className="homelink" href={HOMEPAGE_ROUTE}>
          <img src={logo} className="icon" />
        </a>
        <NavLink className={"navlink"}>Таблица лидеров</NavLink>
      </div>
      {user.isAuth ? (
        <div className="navbuttons">
          <NavLink
            className="iconbutton iconbutton_text-light"
            to={PROFILE_ROUTE}
          >
            <BiUser size={"1.5em"} />
          </NavLink>
          <NavLink
            className={"iconbutton iconbutton_text-light"}
            onClick={() => user.setIsAuth(false)}
          >
            <BiExit size={"1.5em"} />
          </NavLink>
        </div>
      ) : (
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
      )}
    </div>
  );
});

export default NavBar;
