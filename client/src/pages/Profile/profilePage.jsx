import { useState } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import TabButton from "../../components/TabButton/TabButton";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import WhiteLogo from "../../public/WhiteLogo.svg";
import './style.css'
import { NavLink } from "react-router-dom";

export default function ProfilePage() {

  const [toggleState, setToggleState] = useState(1)

  function toggleTab(index){
    setToggleState(index)
  }


  return (
    <>
      <div className="profile-page">
        <NavBar logo={WhiteLogo}></NavBar>
        <div className="profile-page_content">
          <div className="content-header">
            <div className="content-header_profile-info">
              <div className="profile-info">
                <UserAvatar/>
                <div className="profile-info_username">
                  <h1>
                    Имя пользователя
                  </h1>
                  <p>0 баллов</p>
                </div>
              </div>
              <Button className={"button button_outlined-light button_small"} text={"Настройки"}></Button>
            </div>
          </div>
          <div className="content-tabs">
            <div className="tabs_buttons">
              <TabButton className={toggleState === 1 ? 'tab-button tab-button_active' : 'tab-button'} text={'Квизы'} onClick={() => toggleTab(1)}></TabButton>
              <TabButton className={toggleState === 2 ? 'tab-button tab-button_active' : 'tab-button'} text={'Избранное'} onClick={() => toggleTab(2)}></TabButton>
            </div>
            <hr></hr>
          </div>
          <div id="quiz" className={toggleState === 1 ? "content-grid_active" : "content-grid"}>
            <Card name={"Вторая мировая"}/>
            <Card name={"Вторая мировая"}/>
            <Card name={"Вторая мировая"}/>
            <Card name={"Вторая мировая"}/>
          </div>
          <div id="favorite" className={toggleState === 2 ? "content-grid_active" : "content-grid"}>
            <p>text</p>
          </div>
        </div>
      </div>
    </>
  )
}
