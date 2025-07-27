import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ED1E1E;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  padding: 10px 20px;
  top: 0;
  left: 0;
  z-index: 1000;

  img {
    width: 150px;
  }

  div {
    font-family: 'Playfair Display', serif;
    font-size: clamp(0.5rem, 0.143rem + 0.952vw, 1rem);
    font-weight: bold;
    color: #fff;
  }
`;