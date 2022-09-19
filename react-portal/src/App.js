import { useRef, useState } from "react";
import Popup from "./portal/Popup";

function App() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const winRef = useRef();

  const openPopup = () => {
    setOpen(true);
  }

  const closePopup = () => {
    setOpen(open => {
      if (open) winRef.current.close();
      return false;
    });
  }

  const startConter = () => {
    setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }

  const onWinClose = () => {
    setOpen(false);
  }

  return (
    <div className="App">
      {open && <Popup ref={winRef} onWinClose={onWinClose}>Count: { count }</Popup>}
      <button onClick={openPopup}>Open Popup</button>
      <button onClick={closePopup}>Close Popup</button>
      <button onClick={startConter}>Start Counter</button>
      <p>Count: { count }</p>
    </div>
  );
}

export default App;
