import React from "react";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  );
};

export default FriendListItem;
