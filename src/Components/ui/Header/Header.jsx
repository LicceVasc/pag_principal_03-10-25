import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [selected, setSelected] = useState(0);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const toggleCadastro = () => {
    setSelected(1);
    setMostrarCadastro(!mostrarCadastro);
    setMostrarLogin(false);
  };

  const toggleLogin = () => {
    setSelected(2);
    setMostrarLogin(!mostrarLogin);
    setMostrarCadastro(false);
  };

  const fecharPopups = () => {
    setMostrarCadastro(false);
    setMostrarLogin(false);
    setSelected(0);
  };

  return (
    <div className="header-container">
      <h1>T-Chef</h1>
      <div className='botoes'>
        <button className={selected === 0 ? 'selected' : ''} onClick={() => { setSelected(0); fecharPopups(); }}>
          Página Principal
        </button>

        <div className="botao-com-popup">
          <button className={selected === 1 ? 'selected' : ''} onClick={toggleCadastro}>
            Cadastro
          </button>
          {mostrarCadastro && (
            <div className="caixa-modal">
              <h2>Cadastro</h2>
              <ul>
                <li><button>Funcionário</button></li>
                <li><button>Cliente</button></li>
                <li><button>Chef</button></li>
              </ul>
              <button className="botao-fechar" onClick={fecharPopups}>Fechar</button>
            </div>
          )}
        </div>

        <div className="botao-com-popup">
          <button className={selected === 2 ? 'selected' : ''} onClick={toggleLogin}>
            Login
          </button>
          {mostrarLogin && (
            <div className="caixa-modal">
              <h2>Login</h2>
              <ul>
                <li><button>Entrar como Cliente</button></li>
                <li><button>Entrar como Empresa</button></li>
              </ul>
              <button className="botao-fechar" onClick={fecharPopups}>Fechar</button>
            </div>
          )}
        </div>

        <button className={selected === 3 ? 'selected' : ''} onClick={() => { setSelected(3); fecharPopups(); }}>
          Sobre Nós
        </button>
      </div>
    </div>
  );
};

export default Header;