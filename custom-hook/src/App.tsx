import style from './App.module.css';
import StarWarsPlanets from './components/StarWarsPlanets';

function App() {
  return (
    <div className={style.app}>
      <StarWarsPlanets />
    </div>
  );
}

export default App;
