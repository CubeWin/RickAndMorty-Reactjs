import { useState } from 'react';
import { useLocation } from 'wouter';

const InputSearch = () => {
  const [keywork, setKeywork] = useState('');
  const [path, pushLocation] = useLocation();

  const handleChange = e => {
    setKeywork(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    pushLocation(`/characters/${keywork}`);
  };

  return (
    <div className='rounded-2xl my-5 mx-2 flex justify-between'>
      <form onSubmit={handleSubmit} className='flex justify-center w-full'>
        <label
          htmlFor='inputBusqueda'
          className='relative block w-full mx-2 my-2 rounded'
        >
          <span className='absolute inset-y-0 left-0 flex items-center justify-center pl-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              width='16px'
              height='16px'
            >
              <path
                fill='#339AF0'
                d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z'
              />
            </svg>
          </span>
          <input
            type='text'
            className='h-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-16 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            placeholder='Search for characters...'
            onChange={handleChange}
            value={keywork}
          />
          <span className='absolute inset-y-0 right-0 flex items-center justify-center pl-2 '>
            <button
              type='submit'
              className='h-full bg-blue-400 px-2 rounded-r text-white'
            >
              Search
            </button>
          </span>
        </label>
      </form>
    </div>
  );
};

export default InputSearch;
