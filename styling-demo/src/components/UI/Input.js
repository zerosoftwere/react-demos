import styled, { css } from 'styled-components';

const Input = styled.input.attrs(prop => ({
  type: 'text'
}))`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #aaa;
  padding: 4px;
  outline: none;
  border-radius: 2px;

  ${props => !props.valid && css`
    border: 1px solid salmon;
  `}
`;

export default Input;