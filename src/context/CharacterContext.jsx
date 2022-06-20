import { createContext, useState } from 'react';

const CharacterContext = createContext({});

const CharacterContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [id, setId] = useState(1);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters, id, setId }}>
      {children}
    </CharacterContext.Provider>
  );
};
export { CharacterContext };
export default CharacterContextProvider;
