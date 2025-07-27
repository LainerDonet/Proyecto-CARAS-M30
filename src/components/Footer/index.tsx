import React from 'react';
import * as S from './styles';

const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <div className="footer-content">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="contact-info">
          <p>Contacto: info@caras.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className="footer-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </S.FooterWrapper>
  );
};

export default Footer;