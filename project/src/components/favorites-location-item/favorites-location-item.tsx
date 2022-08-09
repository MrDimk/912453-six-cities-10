import { Offer } from '../../mocks/offers';
import { FavoriteOfferCard } from '../favorite-offer-card/favorite-offer-card';

type FavoritesLocationItemProps = {
  offers: Offer[],
  location: string
};

export function FavoriteLocationItem({ offers, location }: FavoritesLocationItemProps): JSX.Element {
  const offersInLocation = offers.filter((offer) => offer.location === location);
  return (
    <li className="favorites__locations-items" key={location}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offersInLocation.filter((offer) => offer.location === location).map(
          (offer) => <FavoriteOfferCard offer={offer} key={offer.id} />
        )}
      </div>
    </li>
  );
}
