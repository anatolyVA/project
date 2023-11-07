import NavBar from "../components/NavBar/NavBar";
import "./style.css";
import WhiteLogo from "./WhiteLogo.svg";
import { NavLink } from "react-router-dom";
import { MAPPAGE_ROUTE } from "../utils/const";
import Card from "../components/Card/Card";

export default function HomePage() {
  return (
    <>
      <div className="home-page">
        <div className="home-page_hero">
          <NavBar logo={WhiteLogo} type={"navbar_default"} />
          <div className="home-page_hero-center">
            <h1 style={{ fontSize: "48px", color: "white" }}>
              Интерактивная карта истории Смоленска
            </h1>
            <NavLink
              className={"button button_filled button_large"}
              to={MAPPAGE_ROUTE}
            >
              Исследовать
            </NavLink>
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <h2 style={{ fontSize: "40px", color: "white" }}>
              Популярные тесты
            </h2>
            <NavLink className={"navlink"}>Подробнее</NavLink>
          </div>
          <div className="section-rows">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    </>
  );
}
