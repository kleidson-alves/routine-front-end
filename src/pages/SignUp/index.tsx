import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

import { Container, Content, AnimationContainer, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import { useToast } from '../../hooks/toast';

interface Credentials {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signUp } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: Credentials) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Email inválido  '),
          password: Yup.string().min(6, 'Mínimo 6 dígitos'),
          confirm: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'A senha deve ser igual',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signUp({
          name: data.name,
          email: data.email,
          password: data.password,
        });
        history.push('/');
        addToast({
          title: 'Cadastro realizado com sucesso!',
          description: 'Você já pode fazer o seu login',
          type: 'success',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationErrors = getValidationErrors(err);
          formRef.current?.setErrors(validationErrors);
          return;
        }
        addToast({
          title: 'API desconectada!',
          description: 'Não foi possível se conectar a API por causa do Lucas',
          type: 'error',
        });
      }
    },
    [signUp, addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Routine" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" type="text" placeholder="Nome" />
            <Input name="email" type="email" placeholder="Email" />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              style={{ color: 'white' }}
            />
            <Input
              name="confirm"
              type="password"
              placeholder="Confirmar a senha"
            />

            <Button type="submit">CADASTRAR</Button>
          </Form>

          <Link to="/">Já estou cadastrado</Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
