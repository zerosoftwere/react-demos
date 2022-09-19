import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  width: 280px;
`;

const StyledListItem = styled.li`
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--primary);
  background-color: white;
  cursor: pointer;
  text-align: center;
  transition: all 400ms ease-in-out;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:hover,
  &:active {
    background-color: #ccc;
  }

  &.enter {
    opacity: 0;
    transform: translateX(-20%);
  }

  &.enter-active {
    opacity: 1;
    transform: translateX(0);
  }

  &.exit-active {
    opacity: 0;
    transform: translateX(-20%);
  }
`;

function List() {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((items) => items.concat(items.length + 1));
  };

  const removeItemHandler = (selItem) => {
    setItems(items => items.filter((item) => item !== selItem));
  };

  const listItems = items.map((item) => (
    <CSSTransition
      key={item}
      timeout={400}
      classNames={{
        enter: 'enter',
        enterActive: 'enter-active',
        exitActive: 'exit-active'
      }}
    >
      <StyledListItem
        className="list-item"
        onClick={() => removeItemHandler(item)}
      >
        {item}
      </StyledListItem>
    </CSSTransition>
  ));
  return (
    <div>
      <button className="button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove</p>
      <TransitionGroup component={StyledList}>{listItems}</TransitionGroup>
    </div>
  );
}

export default List;
