import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import { FiPlus } from 'react-icons/fi';
import mapMarkerImg from '../../images/map-marker.svg';
import { ReactComponent as ArrowImg } from '../../images/arrow.svg';
import { Container, EnterButton, MapContainer, OrphanageLink } from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [35, 60],
  iconAnchor: [16.5, 60],
  popupAnchor: [170, 2],
});

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :</p>
        </header>

        <footer>
          <strong>Porto Alegre</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>

      <MapContainer>
        <Map
          center={[-30.0418326, -51.1870186]}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          <Marker icon={mapIcon} position={[-30.0418326, -51.1870186]}>
            <Popup
              className="map-popup"
              minWidth={240}
              maxWidth={240}
              closeButton={false}
            >
              Lar das meninas
              <OrphanageLink to="/orphanages/1">
                <ArrowImg />
              </OrphanageLink>
            </Popup>
          </Marker>
        </Map>
      </MapContainer>

      <EnterButton to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </EnterButton>
    </Container>
  );
};

export default OrphanagesMap;
