import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import { Container } from './styles';

interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
  prop?: 'time' | 'text';
}

const Label: React.FC<LabelProps> = ({ value, ...rest }) => {
  const [data, setData] = useState(value);

  return (
    <Container>
      <input value={data} {...rest} onChange={e => setData(e.target.value)} />
    </Container>
  );
};

export default Label;
