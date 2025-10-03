import React, { useState } from 'react';
import './nav.css';
import filtro from '../../../public/filtro.png';
import seta from '../../../public/seta.png';

const sugestoesFixas = [
  'Ponta Verde',
  'Jatiúca',
  'Pajuçara',
  'Farol',
  'Mangabeiras',
  'Jacarecica'
];

const Nav = () => {
  const [localizacao, setLocalizacao] = useState('');
  const [sugestoesVisiveis, setSugestoesVisiveis] = useState(false);

  const handleBuscar = () => {
    if (localizacao.trim() !== '') {
      console.log('Localização enviada:', localizacao);
      setLocalizacao('');
      setSugestoesVisiveis(false);
    }
  };

  const handleChange = (e) => {
    setLocalizacao(e.target.value);
    setSugestoesVisiveis(e.target.value.trim() !== '');
  };

  const selecionarSugestao = (sugestao) => {
    setLocalizacao(sugestao);
    setSugestoesVisiveis(false);
  };

  const sugestoesFiltradas = sugestoesFixas.filter((sugestao) =>
    sugestao.toLowerCase().includes(localizacao.toLowerCase())
  );

  return (
    <>
      <div className='filtros'>
        <button className='laranja'>Filtrar <img src={filtro} alt="" /></button>
        <button className='btn'>Food Truck's</button>
        <button className='btn'>Culinária <img src={seta} alt="" /></button>
      </div>

      <div className='localizacao'>
        <input
          type="text"
          placeholder='Digite sua Localização'
          value={localizacao}
          onChange={handleChange}
        />
        <button onClick={handleBuscar}>Buscar</button>

        {sugestoesVisiveis && sugestoesFiltradas.length > 0 && (
          <div className="popup-sugestoes">
            {sugestoesFiltradas.map((sugestao, index) => (
              <div
                key={index}
                className="item-sugestao"
                onClick={() => selecionarSugestao(sugestao)}
              >
                {sugestao}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;