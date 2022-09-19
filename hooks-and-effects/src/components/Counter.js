import useCounter from "../hooks/use-counter";

const Counter = () => {
  const counter = useCounter();
  return (
    <div>
      { counter }
    </div>
  )
};

export default Counter;