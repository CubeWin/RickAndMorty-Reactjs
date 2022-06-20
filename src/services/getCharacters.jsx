import axios from 'axios';

const getCharacters = async ({
  page = 1,
  characterName = '',
  characterStatus = '',
  characterGender = '',
}) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${characterName}&status=${characterStatus}&gender=${characterGender}`;
  const res = await axios.get(url);
  const {
    data: { results = [] },
  } = res;
  return results;
};

export default getCharacters;
