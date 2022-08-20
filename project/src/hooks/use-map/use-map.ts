import { MutableRefObject, useEffect, useState } from 'react';
import { Map, TileLayer, MapOptions, LayerOptions } from 'leaflet';
import { City } from '../../const';

export function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  currentCity: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const element = mapRef.current;
    const hasChildren = element ? element.hasChildNodes() : false;
    const { location, zoom } = currentCity;

    const mapOptions: MapOptions = {
      center: location,
      zoom: zoom
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
    } else {
      map && map.setView(location, zoom);
    }

  }, [map, mapRef, currentCity]);

  return map;
}
