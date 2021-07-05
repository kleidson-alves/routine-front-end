import React, { ChangeEvent, useCallback, useMemo, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container, Content, DefaultUser, AvatarInput } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  confirm_password: string;
}

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const history = useHistory();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Email inválido  '),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val: string) => !!val.length,
            then: Yup.string().min(6, 'mínimo 6 dígitos'),
            otherwise: Yup.string(),
          }),
          confirm_password: Yup.string()
            .when('old_password', {
              is: (val: string) => !!val.length,
              then: Yup.string().min(6, 'mínimo 6 dígitos'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], 'A senha deve ser igual'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.put('/profile', data);
        updateUser(response.data);

        addToast({
          title: 'Perfil atualizado com sucesso!',
          type: 'success',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationErrors = getValidationErrors(err);
          formRef.current?.setErrors(validationErrors);
          return;
        }
        addToast({
          title: 'Falha ao atualizar',
          description: 'Ocorreu um erro na hora de atualizar o perfil',
          type: 'error',
        });
      }
    },
    [addToast],
  );

  const handleAvatarChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const data = new FormData();

        data.append('avatar', event.target.files[0]);
        try {
          api.patch('/users/avatar', data).then(response => {
            updateUser(response.data);

            addToast({
              type: 'success',
              title: 'Avatar atualizado',
            });
          });
        } catch (e) {
          addToast({
            title: 'Erro na Atualização',
            description: 'Alguma coisa deu errado, tente de novo mais tarde',
            type: 'error',
          });
        }
      }
    },
    [addToast, updateUser],
  );

  const partialName = useMemo(() => {
    return user.name.substr(0, 2).toString();
  }, [user.name]);

  return (
    <Container>
      <header>
        <Link to="/">
          <div>
            <FiArrowLeft />
          </div>
        </Link>
      </header>
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            {user.avatar ? (
              <img
                src="https://avatars.githubusercontent.com/u/69803742?s=400&u=bed9f870ade198b4309a727a909f718f4224a55e&v=4"
                alt={user.name}
              />
            ) : (
              <DefaultUser>
                <span>{partialName}</span>
              </DefaultUser>
            )}
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>
          <Input name="name" type="text" placeholder="Nome" />
          <Input name="email" type="email" placeholder="Email" />
          <Input
            name="old_password"
            type="password"
            placeholder="Senha atual"
          />
          <Input name="password" type="password" placeholder="Nova senha" />
          <Input
            name="confirm_password"
            type="password"
            placeholder="Confirmar senha"
          />

          <Button type="submit">Atualizar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
