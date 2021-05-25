import React, { useState } from 'react';
import { FiClock, FiSettings } from 'react-icons/fi';
import Button from '../../components/Button';

import Label from '../../components/Label';

import {
  Container,
  Content,
  Table,
  Title,
  Header,
  Time,
  ButtonContent,
} from './styles';

const Home: React.FC = () => {
  const [items, setItems] = useState<string[]>(['', '', '', '', '', '', '']);
  const [hours, setHours] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  return (
    <Container>
      <Content>
        <Table>
          <Title>
            <Label />
          </Title>
          <FiSettings size={50} />
          <ul>
            <thead>
              <Time>
                <FiClock size={30} />
              </Time>
              <Header>SEGUNDA</Header>
              <Header>TERÇA</Header>
              <Header>QUARTA</Header>
              <Header>QUINTA</Header>
              <Header>SEXTA</Header>
              <Header>SÁBADO</Header>
              <Header>DOMINGO</Header>
            </thead>
            <tbody>
              {hours.map((hour, index) => (
                <tr>
                  <Time>
                    <p>{index + 6}</p>
                  </Time>
                  {items.map((item, id) => (
                    <td>
                      <Label key={id} value={item} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </ul>
        </Table>
      </Content>
      <ButtonContent>
        <Button>SALVAR</Button>
      </ButtonContent>
    </Container>
  );
};

export default Home;
