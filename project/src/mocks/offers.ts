import { Coordinates } from '../const';

export type Offer = {
  id: string,
  image: string,
  mark: string,
  price: number,
  title: string,
  type: string,
  favorite: boolean,
  rating: number,
  location: string,
  images: string[],
  bedrooms: number,
  maxAdults: number,
  insideFeatures: string[],
  coordinates: Coordinates,
  host: {
    name: string,
    avatar: string,
    proStatus: boolean,
  },
  description: string,
  reviews: string[]
};

export type Review = {
  id: string,
  author: {
    avatar: string,
    name: string,
  },
  text: string,
  date: string,
  rating: number,
}

export const mockReviews: Review[] = [
  {
    id: 'comment-1',
    author: {
      avatar: 'img/avatar-max.jpg',
      name: 'Max',
    },
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
    rating: 4
  },
  {
    id: 'comment-2',
    author: {
      avatar: 'img/avatar-max.jpg',
      name: 'Keks',
    },
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
    rating: 4
  },
  {
    id: 'comment-3',
    author: {
      avatar: 'img/avatar-max.jpg',
      name: 'Stas',
    },
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
    rating: 4
  },
  {
    id: 'comment-4',
    author: {
      avatar: 'img/avatar-max.jpg',
      name: 'Taras',
    },
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
    rating: 4
  },
];

const mockOffers: Offer[] = [
  {
    id: 'id-1',
    image: 'img/room.jpg',
    mark: 'Premium',
    price: 120,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    favorite: true,
    rating: 4,
    location: 'Amsterdam',
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
    bedrooms: 2,
    maxAdults: 4,
    insideFeatures: ['Wi-Fi', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Cabel TV', 'Fridge',],
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
    host: {
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      proStatus: true,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    reviews: ['comment-1', 'comment-2', 'comment-3', 'comment-4'],
  },
  {
    id: 'id-2',
    image: 'img/apartment-03.jpg',
    mark: '',
    price: 85,
    title: 'Wood and stone place',
    type: 'Private room',
    favorite: true,
    rating: 5,
    location: 'Amsterdam',
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
    bedrooms: 1,
    maxAdults: 2,
    insideFeatures: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge',],
    coordinates: {
      lat: 52.369553943508,
      lng: 4.85309666406198,
    },
    host: {
      name: 'Helga',
      avatar: 'img/avatar-angelina.jpg',
      proStatus: false,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    reviews: ['comment-1', 'comment-2'],
  },
  {
    id: 'id-3',
    image: 'img/apartment-02.jpg',
    mark: 'Premium',
    price: 90,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    favorite: true,
    rating: 2.6,
    location: 'Amsterdam',
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
    bedrooms: 3,
    maxAdults: 5,
    insideFeatures: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Fridge',],
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
    host: {
      name: 'Maria',
      avatar: 'img/avatar-angelina.jpg',
      proStatus: true,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    reviews: ['comment-3', 'comment-4'],
  },
  {
    id: 'id-4',
    image: 'img/apartment-01.jpg',
    mark: '',
    price: 150,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    favorite: false,
    rating: 3.5,
    location: 'Amsterdam',
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
    bedrooms: 2,
    maxAdults: 3,
    insideFeatures: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge',],
    coordinates: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    },
    host: {
      name: 'Sofia',
      avatar: 'img/avatar-angelina.jpg',
      proStatus: false,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    reviews: ['comment-1', 'comment-3', 'comment-4'],
  },
  {
    id: 'id-5',
    image: 'img/apartment-01.jpg',
    mark: '',
    price: 150,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    favorite: false,
    rating: 3.5,
    location: 'Paris',
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
    bedrooms: 2,
    maxAdults: 3,
    insideFeatures: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge',],
    coordinates: {
      lat: 48.8577,
      lng: 2.3456,
    },
    host: {
      name: 'Sofia',
      avatar: 'img/avatar-angelina.jpg',
      proStatus: false,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    reviews: ['comment-1', 'comment-3', 'comment-4'],
  },
];

export function getOffers(): Offer[] {
  return mockOffers;
}

class IdGenerator {
  static #id = 1;
  static getId = () => {
    this.#id++;
    return this.#id;
  };
}

export function getNewId() {
  return IdGenerator.getId();
}
