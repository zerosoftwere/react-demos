import React from 'react';
import Card from '../../UI/Card';

import UserForm from '../UserForm/UserForm';

const NewUser = ({onSaveUser}) => {
  return (
    <Card>
      <UserForm onSaveUser={onSaveUser}/>
    </Card>
  )
};

export default NewUser;