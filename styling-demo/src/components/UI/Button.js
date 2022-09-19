import styled, { css } from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  padding: 8px 20px;
  border: 1px solid #aaa;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, .3);
  border-radius: 2px;
  cursor: pointer;

  @media(max-width: 425px) {
    width: 100%;
  }

  &:active {
    transform: translate(1px, 1px);
  }

  ${props => props.primary && css`
    color: white;
    background-color: brown;
  `}
`;

/*import style from "./Button.module.css";

const Button = ({primary, children }) => {
  return (
    <button type="text" className={`${style.button} ${primary && style.primary}`}>
      {children}
    </button>
  );
};*/

export default Button;
