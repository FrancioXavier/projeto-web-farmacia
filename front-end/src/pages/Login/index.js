import React from 'react';
// import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
// import { Title, Paragraph } from './styled';
// import { clicaBotaoRequest } from '../../store/modules/example/actions';
import { InformationLight } from '../../config/colors';

export default function Login() {
  // const dispatch = useDispatch();
  // function handleClick(e) {
  //   e.preventDefault();

  //   dispatch(clicaBotaoRequest());
  // }
  return (
    <Container style={{ background: InformationLight }}>
      {/* <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragraph>Lorem</Paragraph>
      <button type="button" onClick={handleClick}>
        Enviar
      </button> */}
    </Container>
  );
}
