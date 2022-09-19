import React from 'react';
import Card from '../../UI/Card';
import ListGroup from '../../UI/ListGroup';
import UserListItem from './UserListItem';

const UserList = ({users, onRemoveUser}) => {
  const clickHandler = index => onRemoveUser(index);

  return (
    <Card>
      <ListGroup>
        {users.map((user, i) => <UserListItem key={i} user={user} onClick={() => clickHandler(i)}/>)}
      </ListGroup>
    </Card>
  );
}

export default UserList;