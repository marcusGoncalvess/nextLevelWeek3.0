import styled from 'styled-components';

import { Link } from 'react-router-dom';

import backgroundImg from '../../images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${backgroundImg}) no-repeat 80% center;

  main {
    max-width: 350px;
    h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
      margin-bottom: 40px;
    }

    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;

  font-size: 24px;
  text-align: right;
  line-height: 32px;
  strong {
    font-weight: 800;
  }
`;

export const EnterButton = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background-color: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background-color: #96feff;

    svg path {
      stroke: #15c3d6;
      transition: 0.3s;
    }
  }
`;
