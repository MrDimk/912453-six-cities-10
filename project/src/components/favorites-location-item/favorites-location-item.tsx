import { Offers } from '../../types/types';
import { FavoriteOfferCard } from '../favorite-offer-card/favorite-offer-card';

type FavoritesLocationItemProps = {
  offers: Offers,
  city: string
};

export function FavoriteLocationItem({ offers, city }: FavoritesLocationItemProps): JSX.Element {
  const offersInCity = offers.filter((offer) => offer.city.name === city);
  return (
    <li className="favorites__locations-items" key={city}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offersInCity.filter((offer) => offer.city.name === city).map(
          (offer) => <FavoriteOfferCard offer={offer} key={offer.id} />
        )}
      </div>
    </li>
  );
}
