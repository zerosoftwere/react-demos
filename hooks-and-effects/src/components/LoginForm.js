import { forwardRef, useImperativeHandle, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input"
import style from './LoginForm.module.css';

const LoginForm = forwardRef((props, ref) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useImperativeHandle(ref, () => ({
    value: {email, password}
  }), [email, password]);

  return (
    <form className={style.form}>
      <Input
        name="email"
        type="email"
        label="Enter Email"
        onChange={setEmail}
      />
      <Input
        name="password"
        type="password"
        label="Enter Password"
        onChange={setPassword}
      />
      <Button primary onClick={props.onSubmit}>Login</Button>
    </form>
  )
});

export default LoginForm;