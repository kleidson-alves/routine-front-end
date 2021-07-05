import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu, DefaultUser } from './styles';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  const partialName = useMemo(() => {
    return user.name.substr(0, 2).toString();
  }, [user.name]);
  console.log(user);
  return (
    <Container>
      <Menu>
        <div>
          <p>Bem-vindo, </p>
          <span>{user.name}</span>
        </div>
        <Link to="profile">
          <button type="button">
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
          </button>
        </Link>
      </Menu>
    </Container>
  );
};

export default Header;
