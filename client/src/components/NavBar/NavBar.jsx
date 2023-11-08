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

const NavBar = observer(({ type, logo }) => {
  const { user } = useContext(Context);

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
      {user.isAuth ? (
        <div className="navbuttons">
          <NavLink className="button button_text-light button_medium" to={PROFILE_ROUTE}>
            Профиль
          </NavLink>
          <Button
            text={"Выйти"}
            className={"button button_filled button_medium"}
            onClick={() => user.setIsAuth(false)}
          ></Button>
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
