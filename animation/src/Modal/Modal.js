import { CSSTransition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';

const enterActiveAnimation = keyframes`
  0% {
    top: -20%;
    opacity: 0;
  }

  100% {
    top: 30%;
    opacity: 1;
  }
`;

const exitActiveAnimation = keyframes`
  0% {
    top: 30%;
    opacity: 1;
  }

  50% {
    opacity: 1;
    top: 40%;
  }

  100% {
    top: -20%;
    opacity: 0;
  }
`;

const StyledModal = styled.div`
  opacity: 1;
  position: fixed;
  z-index: 200;
  border: 1px solid #eee;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  background-color: white;
  top: 30%;
  left: 25%;
  width: 50%;

  &.enter-active {
    animation: ${enterActiveAnimation} 400ms ease-in;
  }

  &.exit-active {
    animation: ${exitActiveAnimation} 400ms ease-in;
  }
`;

const animationTimeout = {
  enter: 400,
  exit: 400,
};

function Modal(props) {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTimeout}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: 'enter',
        enterActive: 'enter-active',
        exitActive: 'exit-active',
        exitDone: 'exit-done',
      }}
    >
      <StyledModal>
        <h1>A Modal</h1>
        <button className="button" onClick={props.onClose}>
          Dismiss
        </button>
      </StyledModal>
    </CSSTransition>
  );
}

export default Modal;
