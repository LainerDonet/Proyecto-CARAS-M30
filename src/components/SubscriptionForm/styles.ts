import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 40px;

  h1, h2 {
    text-align: center;
    font-family: 'Playfair Display', sans-serif;
    font-weight: bold;
    color: #ED1E1E;
  }

  label {
    font-size: 1.2em;
  }

  input {
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 300px;
  }

  button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #ED1E1E;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #b51717;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  display: block;
  margin-top: 10px;
`;

export const SuccessMessage = styled.span`
  color: green;
  display: block;
  margin-top: 10px;
`;