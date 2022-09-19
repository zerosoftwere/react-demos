import MealItem from '../MealItem/MealItem';
import './MealList.css';

const MealList = () => {
  return (<ul className='meal-list'>
    <MealItem/>
    <MealItem/>
    <MealItem/>
  </ul>)
};

export default MealList;