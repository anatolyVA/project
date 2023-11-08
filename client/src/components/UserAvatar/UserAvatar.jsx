import React from "react";
import './style.css'
import {BiPencil} from 'react-icons/bi'

const UserAvatar = ({avatar}) => {
  return (
    <>
      {avatar ? (
        <div
          className="user-avatar"
          style={{ background: `url(${avatar})` }}
        ></div>
      ) : (
        <div className="user-avatar user-avatar_none"><BiPencil size={'1.5em'}/></div>
      )}

    </>
  );
};

export default UserAvatar;
