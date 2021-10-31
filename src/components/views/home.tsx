import React from 'react';

import { useQuery } from 'react-query';

import { StarWarsCharacterModel } from '../../shared/models';
import { getCharacter } from '../../shared/services';

export const HomeView = () => {
  const { data, isLoading } = useQuery<StarWarsCharacterModel>(
    'clientSearch',
    () => getCharacter('people/1')
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>{data.name}</h1>
    </>
  );
};
