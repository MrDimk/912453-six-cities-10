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

export const Locations = {
  Amsterdam: {
    lat: 52.3909553943508,
    lng: 4.85309666406198,
  }
};

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
