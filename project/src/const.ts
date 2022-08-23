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
      lat: 48.85661,
      lng: 2.351499,
    },
    zoom: 13

  },
  {
    name: 'Cologne',
    location: {
      lat: 50.938361,
      lng: 6.959974,
    },
    zoom: 13
  },
  {
    name: 'Brussels',
    location: {
      lat: 50.846557,
      lng: 4.351697,
    },
    zoom: 13
  },
  {
    name: 'Amsterdam',
    location: {
      lat: 52.37454,
      lng: 4.897976,
    },
    zoom: 13
  },
  {
    name: 'Hamburg',
    location: {
      lat: 53.550341,
      lng: 10.000654,
    },
    zoom: 13
  },
  {
    name: 'Dusseldorf',
    location: {
      lat: 51.225402,
      lng: 6.776314,
    },
    zoom: 13
  },
];

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}
