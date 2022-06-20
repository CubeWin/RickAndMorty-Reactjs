import Characters from '../components/Characters/Characters';
import OneCharacter from '../components/OneCharacter/OneCharacter';

const Inicio = ({ params }) => {
  console.log('inicio', params);
  return (
    <>
      <Characters params={params} />
      <OneCharacter />
    </>
  );
};
export default Inicio;
