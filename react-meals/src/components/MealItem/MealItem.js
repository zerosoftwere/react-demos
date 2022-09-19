import './MealItem.css';

const MealItem = () => {
  return (
    <li className='meal-item'>
      <h3 className='meal-title'>Sushi</h3>
      <h3 className='meal-quantity'>Amount <input type='number' step={1} className='meal-count' defaultValue={1}/></h3>
      <p className='meal-description'>Finess fish and veggies</p>
      <div className='meal-action'><button type='button' className='btn'>+ Add</button></div>
      <div className='meal-price'>$22.99</div>
    </li>
  );
};

export default MealItem;