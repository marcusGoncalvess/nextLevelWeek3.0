import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [35, 60],
  iconAnchor: [16.5, 60],
  popupAnchor: [170, 2],
});

export default mapIcon;
