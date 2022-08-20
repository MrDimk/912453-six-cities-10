export enum AccessType {
  authorized = 'authorized',
  unauthorized = 'unauthorized',
  unknown = 'unknown'
}

export enum Paths {
  Root = '/',
  Offer = '/offer',
  Favorites = '/favorites',
  Login = '/login',
}

export enum Ratings {
  Default = 0,
  oneStar = 1,
  twoStars = 2,
  threeStars = 3,
  fourStars = 4,
  fiveStars = 5
}

export const DEFAULT_ZOOM = 11;

export type ContainerType = {
  containerClassName: string,
  classNamePrefix: string
};

export const ContainerTypes = {
  Cities: {
    containerClassName: 'cities__places-list places__list tabs__content',
    classNamePrefix: 'cities'
  },
  NearPlaces: {
    containerClassName: 'near-places__list places__list',
    classNamePrefix: 'near-places'
  },
};

export type Coordinates = {
  lat: number,
  lng: number,
}

export type City = {
  name: string,
  location: Coordinates,
  zoom: number,
}


export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      lat: 48.8577,
      lng: 2.3456,
    },
    zoom: 11

  },
  {
    name: 'Cologne',
    location: {
      lat: 43.72213,
      lng: 0.97747,
    },
    zoom: 16
  },
  {
    name: 'Brussels',
    location: {
      lat: 62.3909553943508,
      lng: 4.85309666406198,
    },
    zoom: 10
  },
  {
    name: 'Amsterdam',
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
    zoom: 11
  },
  {
    name: 'Hamburg',
    location: {
      lat: 72.3909553943508,
      lng: 4.85309666406198,
    },
    zoom: 10
  },
  {
    name: 'Dusseldorf',
    location: {
      lat: 82.3909553943508,
      lng: 4.85309666406198,
    },
    zoom: 10
  },
];
