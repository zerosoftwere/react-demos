import { useEffect, useRef } from "react";
import "./App.css";
import { useInput } from "./hooks";

function App() {
  const {value, isValid, setValue, onChange} = useInput('', /(?!^$)([^\s])/);

  useEffect(() => {
    console.log(isValid, value);
  }, [isValid, value]);

  return (
    <div className="container">
      <input onChange={onChange} value={value} className={`formControl`} />
      { !isValid && <p className="invalid">Invalid input</p> }
    </div>
  );
}

export default App;
