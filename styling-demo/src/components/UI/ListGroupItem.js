import styled from "styled-components";

const ListGroupItem = styled.li`
  padding: 10px 20px;
  background-color: brown;
  color: white;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default ListGroupItem;
