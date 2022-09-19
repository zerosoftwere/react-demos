import React from "react";
import ListGroupItem from "../../UI/ListGroupItem";

const UserListItem = ({user, onClick}) => {
  return (<ListGroupItem onClick={onClick}>{user.username} ({user.age})</ListGroupItem>)
};

export default UserListItem;