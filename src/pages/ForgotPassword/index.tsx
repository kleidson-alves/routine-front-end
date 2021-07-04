import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import { Container, Content, Background, AnimationContainer } from './styles';

import getValidationError from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface ForgotPsswordData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ForgotPsswordData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        const squema = Yup.object({
          email: Yup.string()
            .email('Email inválido')
            .required('Email obrigatório'),
        });

        await squema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/forgot', { email: data.email });

        addToast({
          type: 'success',
          title: 'Email de recuperação enviado',
          description:
            'Enviamos um email para confirmar a recuperação da senha',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationsErrors = getValidationError(err);
          formRef.current?.setErrors(validationsErrors);

          return;
        }
        addToast({
          title: 'Erro na recuperação de senha',
          description:
            'Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente',
          type: 'error',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Routine" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Email" />
            <Button loading={loading} type="submit">
              Recuperar
            </Button>
          </Form>

          <Link to="/signin">Voltar ao login</Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
