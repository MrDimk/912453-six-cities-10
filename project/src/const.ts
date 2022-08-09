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
