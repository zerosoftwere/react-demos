import { useState } from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop/Backdrop';
import List from './List/List';
import Modal from './Modal/Modal';

const StyledApp = styled.section`
  text-align: center;
`;

function App() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((show) => !show);
  };

  const handleModalClose = () => {
    setShow(setShow(false));
  };

  return (
    <StyledApp>
      <Modal show={show} onClose={handleModalClose} />
      {show && <Backdrop /> }
      <h1>className Animations</h1>
      <button className="button" onClick={handleToggle}>
        Open Modal
      </button>
      <h3>Animation Lists</h3>
      <List />
    </StyledApp>
  );
}

export default App;
