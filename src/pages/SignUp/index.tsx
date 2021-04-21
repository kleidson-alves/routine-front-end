import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, AnimationContainer, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: any) => {
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
    } catch (err) {
      const validationErrors = getValidationErrors(err);
      formRef.current?.setErrors(validationErrors);
    }
  }, []);

  return (
    <Container>
      <Background />
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

          <a href="/">Já estou cadastrado</a>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
