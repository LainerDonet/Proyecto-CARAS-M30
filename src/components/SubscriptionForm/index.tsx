import React, { useState } from 'react';
import * as S from './styles';

interface FormState {
  name: string;
  email: string;
}

const SubscriptionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '' });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.name.trim() === '') {
      setError('Por favor, ingresa tu nombre.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    setSuccess('¡Suscripción exitosa! Gracias por suscribirte.');
    setFormData({ name: '', email: '' });
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <h1>Suscríbete a nuestro Newsletter</h1>
      <h2>Recibe las últimas noticias y actualizaciones directamente en tu bandeja de entrada</h2>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      
      <label htmlFor="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      
      <button type="submit">Suscribirse</button>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      {success && <S.SuccessMessage>{success}</S.SuccessMessage>}
    </S.FormWrapper>
  );
};

export default SubscriptionForm;