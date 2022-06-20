import { Link } from 'wouter';
import CharacterContextProvider from '../context/CharacterContext';

const Layout = ({ children }) => {
  return (
    <div className='max-h-screen h-screen'>
      <h1 className='font-serif block font-extrabold text-center text-6xl my-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-400'>
        Rick and Morty
      </h1>
      <div className='grid lg:grid-cols-3 xl:grid-cols-4 relative'>
        <CharacterContextProvider>{children}</CharacterContextProvider>
      </div>
    </div>
  );
};

export default Layout;
