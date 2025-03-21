import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id} className={s.item}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
