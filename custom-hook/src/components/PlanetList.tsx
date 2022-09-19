import React, { useEffect, useState } from 'react';
import Planet from '../model/Planet';
import PlanetListItem from './PlanetListItem';
import style from './PlanetList.module.css';
import SearchPlanet from './SearchPlanet';
import { useDebounce } from '../hooks';

const PlanetList: React.FC<{ planets: Planet[] }> = ({planets}) => {
  const [filteredPlanets, setFliteredPlantes] = useState(planets);
  const [filter, setFilter] = useState('');
  const debounce = useDebounce(filter);

  const onChangeHandler = (value: string) => {
    setFilter(value.toLowerCase());
  };

  useEffect(() => {
    setFliteredPlantes(
      planets.filter((planet) =>
        planet.name.toLowerCase().match(debounce)
      )
    );
  }, [debounce, planets]);

  return (
    <>
      <SearchPlanet onChange={onChangeHandler} />
      <ul className={style.list}>
        {filteredPlanets.map((planet) => (
          <PlanetListItem
            key={planet.name}
            name={planet.name}
            diameter={planet.diameter}
            terrain={planet.terrain}
          />
        ))}
      </ul>
    </>
  );
};

export default PlanetList;
