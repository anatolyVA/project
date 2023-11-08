import NavBar from "../../components/NavBar/NavBar";
import "./style.css";
import WhiteLogo from "../../public/WhiteLogo.svg";
import { NavLink } from "react-router-dom";
import { MAPPAGE_ROUTE } from "../../utils/const";
import Card from "../../components/Card/Card";
import MapPNG from "../../public/map.png";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <div className="home-page">
        <div className="home-page_hero">
          <NavBar logo={WhiteLogo} type={"navbar_default"} />
          <div className="home-page_hero-center">
            <h1>Интерактивная карта истории Смоленска</h1>
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
            <h2>Популярные места и события</h2>
            <NavLink className={"navlink"}>Подробнее</NavLink>
          </div>
          <div className="section-rows">
            <Card name={"Вторая мировая"}></Card>
            <Card name={"Вторая мировая"}></Card>
            <Card name={"Вторая мировая"}></Card>
            <Card name={"Вторая мировая"}></Card>
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>Популярные тесты</h2>
            <NavLink className={"navlink"}>Подробнее</NavLink>
          </div>
          <div className="section-rows">
            <Card image={MapPNG} name={"Вторая мировая"}></Card>
            <Card name={"Вторая мировая"}></Card>
            <Card name={"Вторая мировая"}></Card>
            <Card name={"Вторая мировая"}></Card>
          </div>
        </div>
        <div className="review-section">
          <div className="review-section_content">
            <h2>Изучайте историю и достопримечательности города</h2>
            <p>Подзаголовок</p>
            <NavLink className={"button button_filled button_medium"}>
              Перейти
            </NavLink>
          </div>
          <div className="review-section_image" />
        </div>
        <div className="review-section">
          <div className="review-section_image" />
          <div className="review-section_content">
            <h2>Проходите тесты и проверяйте свои знания</h2>
            <p>Подзаголовок</p>
            <NavLink className={"button button_filled button_medium"}>
              Перейти
            </NavLink>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
