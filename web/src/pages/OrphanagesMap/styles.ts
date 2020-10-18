import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Map } from 'react-leaflet';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 440px;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      line-height: 28px;
      margin-top: 24px;
    }

    footer {
      display: flex;
      flex-direction: column;
      line-height: 24px;
      strong {
        font-weight: 800;
      }
    }
  }

  .leaflet-container {
    z-index: 1;
  }
`;

export const EnterButton = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  z-index: 2;

  width: 64px;
  height: 64px;
  background-color: #15c3d6;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background-color: #17d6eb;
  }
`;

export const MapStyled = styled(Map)`
  .map-popup {
    .leaflet-popup-content-wrapper {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
      box-shadow: none;
    }

    .leaflet-popup-content {
      color: #0089a5;
      font-size: 20px;
      font-weight: bold;
      margin: 8px 12px;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .leaflet-popup-tip-container {
      display: none;
    }
  }
`;

export const OrphanageLink = styled(Link)`
  width: 40px;
  height: 40px;
  background: #15c3d6;
  box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;

    path {
      stroke: #fff;
    }
  }
`;
