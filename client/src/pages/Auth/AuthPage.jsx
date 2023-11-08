import NavBar from "../../components/NavBar/NavBar";
import "./style.css";
import WhiteLogo from "../../public/WhiteLogo.svg";
import Button from "../../components/Button/Button";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTATION_ROUTE } from "../../utils/const";
export default function AuthPage() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <>
      <div className="auth-page">
        <NavBar logo={WhiteLogo}></NavBar>
        <div className="auth-page_content">
          {isLogin ? (
            <div className="content_left">
              <h1>Войти</h1>
              <input placeholder="Введите ваш логин" type="text"></input>
              <input placeholder="Введите ваш пароль" type="password"></input>
              <div className="text-link">
                <p>Забыли пароль?</p>
                <NavLink className={"auth-navlink"}>Восстановить</NavLink>
              </div>
              <Button
                className={"button button_filled button_large"}
                text={"Войти"}
              ></Button>
              <div className="text-link">
                <p>Нет аккаунта?</p>
                <NavLink to={REGISTATION_ROUTE} className={"auth-navlink"}>
                  Зарегистрироваться
                </NavLink>
              </div>
            </div>
          ) : (
            <div className="content_left">
              <h1>Зарегистрироваться</h1>
              <input placeholder="Введите вашу почту" type="email"></input>
              <input placeholder="Придумайте логин" type="text"></input>
              <input placeholder="Придумайте пароль" type="password"></input>
              <Button
                className={"button button_filled button_large"}
                text={"Зарегистрироваться"}
              ></Button>
              <div className="text-link">
                <p>Уже есть аккаунт?</p>
                <NavLink to={LOGIN_ROUTE} className={"auth-navlink"}>
                  Войти
                </NavLink>
              </div>
            </div>
          )}
          <hr style={{ opacity: 0.2 }}></hr>
          <div className="content_right">
            <Button
              className={"button button_outlined-light button_medium"}
              text={"Войти через Google"}
            ></Button>
            <Button
              className={"button button_outlined-light button_medium"}
              text={"Войти через Google"}
            ></Button>
            <Button
              className={"button button_outlined-light button_medium"}
              text={"Войти через Google"}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
