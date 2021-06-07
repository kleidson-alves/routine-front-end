import React from 'react';
import Navbar from '../../components/NavBar';
import Header from '../../components/Header';
import CurrentRoutine from '../NewRoutine';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Home: React.FC = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <Navbar />
      <Header />
      <Container>
        <CurrentRoutine />
      </Container>
    </>
  );
};

export default Home;
