import React, { useState } from 'react';
import Navbar from '../../components/NavBar';
import Header from '../../components/Header';

import { Container, Routines } from './styles';

const Home: React.FC = () => {
  const [currentRoutine, setCurrentRoutine] = useState();
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <Routines />
      </Container>
    </>
  );
};

export default Home;
