import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import SubscriptionForm from './components/SubscriptionForm';
import FeaturedSection from './components/FeaturedSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Main = styled.main`
  padding: 20px;
  margin-top: 80px; /* Adjust based on header height */
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <SubscriptionForm />
        <FeaturedSection />
        <Testimonials />
      </Main>
      <Footer />
    </>
  );
};

export default App;