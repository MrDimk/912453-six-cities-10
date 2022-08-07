export type Offer = {
  id: string,
  image: string,
  premium: boolean,
  price: number,
  title: string,
  type: string,
  favorite: boolean,
  rating: number,
};

export function getOffers(count = 1): Offer[] {
  const result: Offer[] = [];
  for (let i = 0; i < count; i++) {
    result.push({
      id: String(new Date()),
      image: 'img/room.jpg',
      premium: false,
      price: 120,
      title: 'Beautiful &amp; luxurious apartment at great location',
      type: 'Apartment',
      favorite: false,
      rating: 3,
    });
  }
  return result;
}

export enum AccessType {
  authorized = 'authorized',
  unauthorized = 'unauthorized',
  unknown = 'unknown'
}
