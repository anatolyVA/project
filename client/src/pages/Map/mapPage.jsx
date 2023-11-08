import Map from "../../components/Map/Map";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import BlackLogo from "../../public/BlackLogo.svg";
import "./style.css";

export default function MapPage() {
  return (
    <>
      <div className="ui">
        <NavBar logo={BlackLogo} type={"navbar_map"} />
        <SideBar />
      </div>
      <Map/>
    </>
  );
}
