import React, { useState } from 'react';
import { FiPlusCircle, FiStar } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Navbar from '../../components/NavBar';

import { Container, RoutineList } from './styles';

interface RoutineData {
  id: string;
  name: string;
}

const Routines: React.FC = () => {
  const [routines, setRoutines] = useState<RoutineData[]>([]);

  const history = useHistory();
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <RoutineList>
          <div>
            <p>Faculdade</p>
            <FiStar size={30} />
          </div>
          <div>
            <p>Pregação</p>
          </div>
          <div>
            <button type="button" onClick={() => history.push('/newroutine')}>
              <FiPlusCircle size={30} />
            </button>
          </div>
        </RoutineList>
      </Container>
    </>
  );
};

export default Routines;
