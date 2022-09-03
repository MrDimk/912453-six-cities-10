import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/use-map/use-map';
import { useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { City } from '../../const';
import { Offer, Offers } from '../../types/types';

const URL_MARKER_DEFAULT = '../img/pin.svg';
const URL_MARKER_ACTIVE = '../img/pin-active.svg';

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
});

const activeIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
});

type MapProps = {
  offers: Offers,
  currentCity: City,
  activeOffer?: Offer | null
};

export function OffersMap({ offers, currentCity, activeOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  useEffect(() => {
    const markers = new Map();
    offers.forEach((offer) => markers.set(offer.id, new Marker({ lat: offer.location.latitude, lng: offer.location.longitude })));

    if (map) {
      for (const marker of markers.values()) {
        marker.setIcon(defaultIcon).addTo(map);
      }
      if (activeOffer) {
        markers.get(activeOffer.id).setIcon(activeIcon);
      }
    }
  }, [map, currentCity, offers, activeOffer]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
  );
}
