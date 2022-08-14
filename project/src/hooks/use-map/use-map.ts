import { MutableRefObject, useEffect, useState } from 'react';
import { Coordinates } from '../../mocks/offers';
import { Map, TileLayer, MapOptions, LayerOptions } from 'leaflet';
import { DEFAULT_ZOOM } from '../../const';

export function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  coordinates: Coordinates
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const element = mapRef.current;
    const hasChildren = element ? element.hasChildNodes() : false;

    const mapOptions: MapOptions = {
      center: coordinates,
      zoom: DEFAULT_ZOOM
    };

    const templateUrlLayer = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    const layerOptions: LayerOptions = {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    };

    if (element !== null && map === null && !hasChildren) {
      const instanceMap = new Map(element, mapOptions);
      const layer = new TileLayer(templateUrlLayer, layerOptions);

      instanceMap.addLayer(layer);

      setMap(instanceMap);
    }
  }, [map, mapRef, coordinates]);

  return map;
}
