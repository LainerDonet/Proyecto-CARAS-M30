import React from 'react';
import * as S from './styles';
import benefit1 from '../../assets/benefit1.png';
import benefit2 from '../../assets/benefit2.png';
import benefit3 from '../../assets/benefit3.png';

interface Benefit {
  img: string;
  text: string;
}

const benefits: Benefit[] = [
  { img: benefit1, text: 'Recibe noticias exclusivas y actualizaciones antes que nadie.' },
  { img: benefit2, text: 'Accede a contenido premium y ofertas especiales.' },
  { img: benefit3, text: 'Participa en sorteos y concursos exclusivos para suscriptores.' },
];

const FeaturedSection: React.FC = () => {
  return (
    <S.FeaturedWrapper>
      <h2>Beneficios de Suscribirse</h2>
      <div className="benefits">
        {benefits.map((benefit, index) => (
          <div className="benefit" key={index}>
            <img src={benefit.img} alt={`Benefit ${index + 1}`} />
            <p>{benefit.text}</p>
          </div>
        ))}
      </div>
    </S.FeaturedWrapper>
  );
};

export default FeaturedSection;