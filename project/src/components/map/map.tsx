import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/use-map/use-map';
import { useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { City } from '../../const';
import { Offers } from '../../types/types';

const URL_MARKER_DEFAULT = '../img/pin.svg';
// const URL_MARKER_CURRENT = '../../../public/img/pin-active.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  // iconSize: [40, 40],
  // iconAnchor: [20, 40]
});

// const currentCustomIcon = new Icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });

type MapProps = {
  offers: Offers,
  currentCity: City,
};

export function Map({ offers, currentCity }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  const markers = offers.map((offer) => new Marker({ lat: offer.location.latitude, lng: offer.location.longitude }));

  useEffect(() => {
    if (map) {
      markers.forEach((marker) => marker.setIcon(defaultCustomIcon).addTo(map));
    }
  }, [map, currentCity, markers]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
  );
}
