import React from 'react';

import { HiOutlineUserCircle } from 'react-icons/hi';
import { Container, Menu } from './styles';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Menu>
        <li>
          <button onClick={signOut} type="button">
            <HiOutlineUserCircle size={50} />
          </button>
        </li>
      </Menu>
    </Container>
  );
};

export default Header;
