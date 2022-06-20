import { useState } from 'react';
import ListOfCharacter from '../ListOfCharacters/ListOfCharacter';
import InputSearch from '../InputSearch/InputSearch';

const Characters = ({ params: { character, status, gender } }) => {
  console.log('character', character);
  // const [urlParams, setUrlParams] = useState({
  //   character: '',
  //   status: '',
  //   gender: '',
  // });

  // if (params) {
  //   const { character, status, gender } = params;
  //   setUrlParams({ character, status, gender });
  // }

  return (
    <div className='col-span-1 lg:col-span-2 xl:col-span-3 pb-5'>
      <InputSearch />
      <div className='flex flex-wrap justify-center'>
        <ListOfCharacter
          characterName={character ?? ''}
          characterStatus={status ?? ''}
          characterGender={gender ?? ''}
        />
      </div>
    </div>
  );
};

export default Characters;
