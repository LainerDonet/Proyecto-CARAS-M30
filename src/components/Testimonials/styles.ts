import styled from 'styled-components';

export const TestimonialsWrapper = styled.section`
  margin-bottom: 40px;

  h2 {
    text-align: center;
    font-family: 'Playfair Display', sans-serif;
    font-weight: bold;
    color: #ED1E1E;
  }

  .testimonial-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .testimonial {
    max-width: 300px;
    margin: 20px;
    text-align: center;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.1em;
      margin: 10px 0;
      font-family: 'Playfair Display', serif;
      font-style: italic;
    }

    h3 {
      font-size: 1em;
      color: #555;
      font-family: 'Playfair Display', serif;
      font-style: italic;
    }
  }

  @media screen and (max-width: 768px) {
    .testimonial-list {
      flex-direction: column;
      align-items: center;
    }
  }
`;