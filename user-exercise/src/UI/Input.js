import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  margin-bottom: 8px;
  border: 1px solid #aaa;
  padding: 4px;
  border-radius: 2px;

  &:focus {
    border: 1px solid #333;
    outline: none;
  }
`;

export default Input;