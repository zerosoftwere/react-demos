import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseBy, increment, toggle } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const increaseHandler = () => {
    dispatch(increaseBy(5));
  };

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  const actionButtons = (
    <div>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 5</button>
    </div>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter.value}</div>
      {counter.showCounter && actionButtons}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
