import './App.module.css';
import { SignupForm } from './components/Form';
import { OnSignup } from './types';

function App() {
  const signupHandler: OnSignup = (value) => {
    console.log(value);
  };

  return (
    <div className="App">
      <SignupForm onSignup={signupHandler}/>
    </div>
  );
}

export default App;
