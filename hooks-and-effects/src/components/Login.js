import { useRef } from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  const formRef = useRef();

  const handleSubmit = () => {
    console.log(formRef.current.value);
  }
  return (
    <div>
      <LoginForm ref={formRef} onSubmit={handleSubmit}/>
    </div>
  );
};

export default Login;
