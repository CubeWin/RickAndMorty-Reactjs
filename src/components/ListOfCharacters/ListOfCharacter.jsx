import { useEffect, useState } from 'react';
import CardsCharacter from '../Cards/Cards';
import useCharacters from '../../hooks/useCharacters';

const ListOfCharacter = ({
  characterName,
  characterStatus,
  characterGender,
}) => {
  const { loading, characters } = useCharacters({
    characterName,
    characterStatus,
    characterGender,
  });

  if (loading) return <i>...Loading</i>;

  return (
    <>
      {characters.length > 0 &&
        characters.map(c => {
          return <CardsCharacter key={c.id} character={c} />;
        })}
    </>
  );
};

export default ListOfCharacter;
