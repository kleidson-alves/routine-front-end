import React from 'react';

import { HiOutlineUserCircle } from 'react-icons/hi';
import { Container, Menu } from './styles';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Menu>
        <div>
          <p>Bem-vindo, </p>
          <span>{user.name}</span>
        </div>
        <button onClick={signOut} type="button">
          {user.avatar_url ? (
            <img
              src="https://avatars.githubusercontent.com/u/69803742?s=400&u=bed9f870ade198b4309a727a909f718f4224a55e&v=4"
              alt={user.name}
            />
          ) : (
            <HiOutlineUserCircle size={50} />
          )}
        </button>
      </Menu>
    </Container>
  );
};

export default Header;
