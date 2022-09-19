import React from 'react';

const SearchPlanet: React.FC<{ onChange: (value: string) => void }> = (
  props
) => {
  return (
    <div>
      <input onChange={(event) => props.onChange(event?.target.value)} placeholder="search name" />
    </div>
  );
};

export default SearchPlanet;
