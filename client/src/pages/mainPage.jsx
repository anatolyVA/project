import NavBar from "../components/NavBar";
import "./pagestyle.css";
import WhiteLogo from "./WhiteLogo.svg";
import "../index.css";

export default function mainPage() {
  return (
    <>
      <div className="ui">
        <NavBar logo={WhiteLogo} type={"navbar_default"} />
      </div>
      HOME
    </>
  );
}
