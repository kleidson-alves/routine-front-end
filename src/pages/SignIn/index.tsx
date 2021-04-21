import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/useAuth';

import { Container, Content, Background, AnimationContainer } from './styles';

import getValidationError from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

interface Credentials {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: Credentials) => {
      try {
        formRef.current?.setErrors({});
        const squema = Yup.object({
          email: Yup.string()
            .email('Email inválido')
            .required('Email obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await squema.validate(data, {
          abortEarly: false,
        });

        signIn(data);
      } catch (err) {
        const validationsErrors = getValidationError(err);
        formRef.current?.setErrors(validationsErrors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Routine" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
            <Input name="password" type="password" placeholder="Senha" />
            <Button type="submit">ENTRAR</Button>
          </Form>

          <a href="signup">Registre-se grátis</a>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
