import NavBar from "../components/NavBar";
import "./style.css";
import WhiteLogo from "./WhiteLogo.svg";
import { NavLink } from "react-router-dom";
import { MAPPAGE_ROUTE} from "../utils/const";

export default function HomePage() {
  return (
    <>
      <div className="home-page">
        <div className="home-page_hero">
          <NavBar logo={WhiteLogo} type={"navbar_default"} />
          <div className="home-page_hero-center">
            <h1 style={{ color: 'white', fontSize: '48px'}} >
              Интерактивная карта истории Смоленска
            </h1>
            <NavLink className={"button"} to={MAPPAGE_ROUTE}>
              Исследовать
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
