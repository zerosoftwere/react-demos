import styled from "styled-components";

const FormGroup = styled.div`
  & > * {
    display: block;
  }

  & > label {
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

export default FormGroup;
