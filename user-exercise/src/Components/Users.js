import React, { useState } from "react";
import { showAlert } from "../utils/utils";
import NewUser from "./NewUser/NewUser";
import UserList from "./UserList/UserList";

const initialUsers = [
  { username: "Xero", age: 32 },
  { username: "Soft", age: 24 },
];
const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [alert, setAlert] = useState(false);

  const removeUserHandler = (i) => {
    setUsers((users) => users.filter((_, index) => index !== i));
  }

  const saveUserHandler = (user) => {
    if (user.username.trim !== '' && user.age !== '')
      setUsers((users) => [user, ...users]);
    else
      setAlert(true);
  }

  return (
    <>
      {alert && (showAlert('Invalid user input', () => (setAlert(false))))}
      <NewUser onSaveUser={saveUserHandler} />
      <UserList users={users} onRemoveUser={removeUserHandler} />
    </>
  );
};

export default Users;
