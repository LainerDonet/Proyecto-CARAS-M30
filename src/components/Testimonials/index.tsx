import React from 'react';
import * as S from './styles';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';

interface TestimonialData {
  avatar: string;
  quote: string;
  author: string;
}

const testimonials: TestimonialData[] = [
  { avatar: avatar1, quote: 'Este newsletter es increíble. Siempre recibo las noticias más recientes y las ofertas más exclusivas.', author: '- Juan Pérez' },
  { avatar: avatar3, quote: 'Me encanta recibir contenido premium y participar en los sorteos. ¡Muy recomendado!', author: '- María López' },
  { avatar: avatar2, quote: 'Las actualizaciones son siempre puntuales y muy útiles. No puedo esperar a ver qué más ofrecen.', author: '- Carlos García' },
];

const Testimonials: React.FC = () => {
  return (
    <S.TestimonialsWrapper>
      <h2>Testimonios de Suscriptores</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img src={testimonial.avatar} alt={`Avatar ${index + 1}`} />
            <p>"{testimonial.quote}"</p>
            <h3>{testimonial.author}</h3>
          </div>
        ))}
      </div>
    </S.TestimonialsWrapper>
  );
};

export default Testimonials;