import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../images/map-marker.svg';
import { ReactComponent as ArrowImg } from '../../images/arrow.svg';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

import { Container, EnterButton, MapContainer, OrphanageLink } from './styles';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

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
          {orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                icon={mapIcon}
                position={[orphanage.latitude, orphanage.longitude]}
              >
                <Popup
                  className="map-popup"
                  minWidth={240}
                  maxWidth={240}
                  closeButton={false}
                >
                  {orphanage.name}
                  <OrphanageLink to={`/orphanages/${orphanage.id}`}>
                    <ArrowImg />
                  </OrphanageLink>
                </Popup>
              </Marker>
            );
          })}
        </Map>
      </MapContainer>

      <EnterButton to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </EnterButton>
    </Container>
  );
};

export default OrphanagesMap;
