import React from "react";
import './style.css'

const UserAvatar = ({avatar}) => {
  return (
    <>
      {avatar ? (
        <div
          className="user-avatar"
          style={{ background: `url(${avatar})` }}
        ></div>
      ) : (
        <div className="user-avatar user-avatar_none">Icn</div>
      )}

    </>
  );
};

export default UserAvatar;
