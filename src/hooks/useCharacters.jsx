import { useContext, useEffect, useState } from 'react';
import getCharacters from '../services/getCharacters';

import { CharacterContext } from '../context/CharacterContext';

const getCharacter = ({ characterName, characterStatus, characterGender }) => {
  const [loading, setLoading] = useState(false);
  const { characters, setCharacters } = useContext(CharacterContext);

  const asyncGetCharacter = async () => {
    const res = await getCharacters({
      characterName,
      characterStatus,
      characterGender,
    });
    setCharacters(res);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    asyncGetCharacter();
  }, [characterName, characterStatus, characterGender]);

  return { loading, characters };
};

export default getCharacter;
