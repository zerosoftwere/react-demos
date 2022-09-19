import styled from 'styled-components';

const ListGroupItem = styled.li`
  padding: 4px;
  border: 1px solid #aaa;
  border-radius: 2px;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: .5rem;
  }
`;

export default ListGroupItem;