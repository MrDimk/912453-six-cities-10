import { FavoriteLocationItem } from '../../components/favorites-location-item/favorites-location-item';
import { Offer } from '../../mocks/offers';

type FavoritesProps = {
  offers: Offer[],
}

export function Favorites({ offers }: FavoritesProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.favorite);
  const locations = Array.from(new Set(favoriteOffers.map((offer) => offer.location)));

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {locations.map((location: string) => (
                <FavoriteLocationItem offers={favoriteOffers} location={location} key={location} />
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </>
  );
}
