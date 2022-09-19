import React from 'react';

const PlanetListItem: React.FC<{
  name: string;
  diameter: string;
  terrain: string;
}> = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <p>
        Diameter - {props.diameter}, terrain - {props.terrain}
      </p>
    </li>
  );
};

export default PlanetListItem;
