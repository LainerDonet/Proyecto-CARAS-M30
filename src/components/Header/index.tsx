import React from 'react';
import * as S from './styles';
import logo from '../../assets/Logo 2.png';

const Header: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <img src={logo} alt="logo" />
      <div>
        <h1>Suscríbete a nuestro Newsletter</h1>
        <h2>Recibe las últimas noticias y actualizaciones directamente en tu bandeja de entrada</h2>
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;