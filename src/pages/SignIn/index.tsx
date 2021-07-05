import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

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
  const { addToast } = useToast();
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

        await signIn({ email: data.email, password: data.password });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationsErrors = getValidationError(err);
          formRef.current?.setErrors(validationsErrors);

          return;
        }
        addToast({
          title: 'Credenciais incorretas',
          type: 'error',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Routine" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
            <Link to="forgot">Esqueci minha senha</Link>
          </Form>

          <Link to="/signup">Registre-se grátis</Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
