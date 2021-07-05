import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, Content, Title } from './styles';
import Button from '../../components/Button';
import { useRoutine } from '../../hooks/routine';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';

const NewRoutine: React.FC = () => {
  const history = useHistory();
  const { user } = useAuth();
  const { addRoutine } = useRoutine();

  const handleCreateRoutine = useCallback(
    async event => {
      await addRoutine({
        routine_id: user.id,
        routine_name: 'Kleidson',
        date: new Date(),
      });
    },
    [addRoutine, user.id],
  );
  return (
    <Container>
      <Header />
      <button type="button" onClick={() => history.goBack()}>
        <FiArrowLeft size={30} />
      </button>
      <Content>
        <Form onSubmit={handleCreateRoutine}>
          <Title>
            <Input
              name="routine_name"
              type="text"
              placeholder="Nome da rotina"
            />
          </Title>
          <Button type="submit">Salvar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default NewRoutine;
