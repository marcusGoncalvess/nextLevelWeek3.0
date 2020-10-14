import React from 'react';

import { Container, Location, Content } from './styles';

import logoImg from '../../images/logo.svg';
import { ReactComponent as ArrowImg } from '../../images/arrow.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Porto Alegre</strong>
          <span>Rio Grande do Sul</span>
        </Location>

        <a href="/ere">
          <ArrowImg />
        </a>
      </Content>
    </Container>
  );
};

export default Landing;
