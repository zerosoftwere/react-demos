import './Card.css';

const Card = ({children, className}) => {
  const classNames = className ? `card ${className}` : 'card';
  return (
    <div className={classNames}>{children}</div>
  )
};

export default Card;