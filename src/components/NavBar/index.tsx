import React from 'react';
import { IoHomeOutline, IoCalendarOutline } from 'react-icons/io5';
import { Container, Menu } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Menu>
        <li>
          <a href="/">
            <IoHomeOutline size={30} />
            Home
          </a>
        </li>
        <li>
          <a href="/routines">
            <IoCalendarOutline size={30} />
            Rotinas
          </a>
        </li>
      </Menu>
    </Container>
  );
};

export default Navbar;
