import styled from 'styled-components';

export const FeaturedWrapper = styled.section`
  margin-bottom: 40px;

  h2 {
    text-align: center;
    font-family: 'Playfair Display', sans-serif;
    font-weight: bold;
    color: #ED1E1E;
  }

  .benefits {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .benefit {
    max-width: 300px;
    margin: 20px;
    text-align: center;

    img {
      width: 100%;
      border-radius: 10px;
    }

    p {
      margin-top: 10px;
      font-size: 1.1em;
      font-family: 'Playfair Display', serif;
      font-style: italic;
    }
  }

  @media screen and (max-width: 768px) {
    .benefits {
      flex-direction: column;
      align-items: center;
    }
  }
`;