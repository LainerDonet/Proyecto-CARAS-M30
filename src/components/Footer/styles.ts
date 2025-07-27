import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-content {
    display: flex;
    justify-content: space-around;
    width: 80%;
    flex-wrap: wrap;
  }

  .footer-content div {
    margin: 10px;
    text-align: center;
  }

  .footer-content a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }

  .footer-content p {
    margin: 5px 0;
    font-family: 'Barlow', sans-serif;
    font-weight: 300;
  }
`;