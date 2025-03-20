import React from "react";
import s from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      {isOnline ? (
        <p className={clsx(s.status, s.green)}>Online</p>
      ) : (
        <p className={clsx(s.status, s.red)}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
