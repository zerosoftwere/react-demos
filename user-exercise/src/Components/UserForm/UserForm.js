import React, { useRef } from 'react';

import Button from '../../UI/Button';
import FormGroup from '../../UI/FormGroup';
import Input from '../../UI/Input';

const UserForm = ({onSaveUser}) => {
  const usernameRef = useRef();
  const ageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const age = ageRef.current.value;
    const value = {username, age};

    onSaveUser(value);

    usernameRef.current.value = '';
    ageRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor='username'>Username</label>
        <Input ref={usernameRef} id='username'/>
      </FormGroup>
      <FormGroup>
        <label htmlFor='age'>Age (Years)</label>
        <Input type='number' min={0} max={200} ref={ageRef} id='age'/>
      </FormGroup>
      <FormGroup>
        <Button>Add User</Button>
      </FormGroup>
    </form>
  );
}

export default UserForm;