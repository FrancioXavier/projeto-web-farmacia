import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Error404 } from './styled';

export default function Page404() {
  return (
    <Container>
      <Error404>
        ERROR 404 <br />
        <small>Essa página não existe</small>
      </Error404>
    </Container>
  );
}
