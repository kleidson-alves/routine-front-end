import React from 'react';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Routine" />
        <Form
          onSubmit={() => {
            console.log('certo');
          }}
        >
          <Input
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="off"
          />
          <Input name="password" type="password" placeholder="Senha" />
          <Button type="submit">ENTRAR</Button>

          <a href="asas">Registre-se grátis</a>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
