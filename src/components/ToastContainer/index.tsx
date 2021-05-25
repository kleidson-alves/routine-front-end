import React from 'react';
import { animated, useTransition } from 'react-spring';

import { Container } from './styles';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions((props, message) => (
        <animated.div>
          <Toast key={message.id} style={props} message={message} />
        </animated.div>
      ))}
    </Container>
  );
};

export default ToastContainer;
