import React, { useEffect } from 'react';
import useHttp from '../hooks/useHttp';
import Planet from '../model/Planet';
import PlanetList from './PlanetList';

const StarWarsPlanets: React.FC = () => {
  const {pending, error, data: planets, sendRequest} = useHttp<Planet[]>(true);
  useEffect(() => {
    sendRequest('https://swapi.dev/api/planets', (data) => {
      return data.results;
    });
  }, [sendRequest]);

  return (
    <section>
      <h1>Star Wars Planets</h1>
      {pending && <p>Loading...</p>}
      {error && <p>Error - {error}</p>}
      {!error && !pending && <PlanetList planets={planets!}/>}
    </section>
  );
};

export default StarWarsPlanets;
