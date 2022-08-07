import { Offer } from '../../mocks/mocks';
import PlaceCard from '../place-card/place-card';

type RoomsListProps = {
  offers: Offer[],
};

function RoomsList({ offers }: RoomsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => <PlaceCard offer={offer} key={offer.id} />)}
      {/* <PlaceCard offer={offers[0]} />
      <PlaceCard offer={offers[1]} />
      <PlaceCard offer={offers[2]} />
      <PlaceCard offer={offers[3]} />
      <PlaceCard offer={offers[5]} /> */}
    </div>
  );
}

export default RoomsList;
