import Map from "../components/Map";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import BlackLogo from "./BlackLogo.svg";
import "../index.css";

export default function MapPage() {
  return (
    <>
      <div className="ui">
        <NavBar logo={BlackLogo} type={"navbar_map"} />
        <SideBar />
      </div>
      <Map />
    </>
  );
}
