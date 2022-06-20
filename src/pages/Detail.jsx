import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../context/CharacterContext';

const Detail = ({ params }) => {
  const id = params.id || 1;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    axios.get(url).then(res => {
      const { data } = res;
      setData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
        <div>
          <div
            className='my-5 p-1 cw__box--shadow rounded-full'
            style={{ maxWidth: '300px' }}
          >
            <img
              src={data.image}
              alt={data.name}
              loading='lazy'
              className='rounded-full'
            />
          </div>
          <div className='m-0 cw__personaje--text small'>
            <span>Personaje #{data.id}</span>
          </div>
          <div className='m-0 cw__personaje--text'>
            <span>Nombre:</span>
            {data.name}
          </div>
        </div>
      </div>
      <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
        <div>
          <div className='my-5 cw__personaje--text'>
            <span>Especie:</span>
            {data.species}
          </div>
          <div className='my-5 cw__personaje--text'>
            <span>Origen:</span>
            {data.origin.name}
          </div>
          <div className='my-5 cw__personaje--text'>
            <span>Genero:</span>
            {data.gender}
          </div>
          <div className='my-5 cw__personaje--text p-lg-0 pb-5'>
            <span>Estado:</span>
            {data.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
