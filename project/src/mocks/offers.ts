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
};

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
    location: 'Paris',
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
  },
];

export function getOffers(): Offer[] {
  return mockOffers;
}

class IdGenerator {
  static #id = 1;
  static getId = () => {
    // console.log(this.#id);
    this.#id++;
    return this.#id;
  };
}

export function getNewId() {
  return IdGenerator.getId();
}
