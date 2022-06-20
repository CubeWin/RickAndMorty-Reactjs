import { useState, useContext, useEffect } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

const OneCharacter = () => {
  const [isActive, setIsActive] = useState(false);
  const [personaje, setPersonaje] = useState(null);
  const { characters, id } = useContext(CharacterContext);

  useEffect(() => {
    setPersonaje(characters.find(c => c.id == id));
  }, [id]);

  const handleShowCharacter = () => {
    const cardCharacter = document.getElementById('characterSelected');
    setIsActive(!isActive);
    if (isActive) {
      cardCharacter.style.bottom = '-85vh';
    } else {
      cardCharacter.style.bottom = '0';
    }
  };

  return (
    <div
      id='characterSelected'
      className='w-full fixed lg:col-span-1 lg:static transition-all duration-700 ease-in-out'
      style={{ bottom: '-85vh' }}
    >
      <div className='absolute -top-5  w-full text-right lg:hidden'>
        <button
          type='button'
          onClick={handleShowCharacter}
          className='bg-red-400 px-3 py-0 mr-8 rounded-t-full h-10 w-10 text-white text-center'
        >
          {isActive ? 'x' : '^'}
        </button>
      </div>
      <div className='selected-pokemon rounded-3xl bg-gray-100 px-5 py-5 my-5 mx-3 sticky top-5 font-sans flex flex-col justify-around text-center  shadow-lg shadow-gray-700 lg:shadow-none'>
        {personaje ? (
          <>
            <img
              className='h-auto mx-auto max-w-[270px] max-h-[270px] rounded-lg'
              src={personaje.image}
              alt='Pokemon'
            />
            <small className='text-gray-400 font-bold mt-3'>
              N° {personaje.id}
            </small>
            <h1 className='font-bold capitalize text-xl mb-2'>
              {personaje.name}
            </h1>
            <div className='flex justify-center mb-3'>
              <div className='flex'>{personaje.species}</div>
            </div>
            <div className=' capitalize text-sm mb-3' title='Type'>
              {personaje.type !== '' ? personaje.type : 'Unknown'}
            </div>
            <div className='mb-3 p-1 w-auto rounded-full bg-slate-200 uppercase font-bold text-slate-600 text-sm'>
              {personaje.status}
            </div>

            <div className='grid grid-cols-2 justify-center mb-3'>
              <div className='mx-2'>
                <div className='text-gray-500 text-xs font-bold uppercase'>
                  Origin
                </div>
                <div className='font-bold font-mono'>
                  {personaje.origin.name}
                </div>
              </div>
              <div className='mx-2'>
                <div className='text-gray-500 text-xs font-bold uppercase'>
                  Gender
                </div>
                <div className='font-bold font-mono'>{personaje.gender}</div>
              </div>
            </div>
            <div className='capitalize'>
              <span className='uppercase text-xs font-bold mb-3 tracking-wider text-gray-500'>
                Location
              </span>
              <div className='flex justify-center items-center mb-3 font-bold'>
                {personaje.location.name}
              </div>
            </div>
          </>
        ) : (
          <h1>Selecte</h1>
        )}
      </div>
    </div>
  );
};

export default OneCharacter;
