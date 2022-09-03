import { FavoriteLocationItem } from '../../components/favorites-location-item/favorites-location-item';
import { useAppSelector } from '../../hooks';
import { Spinner } from '../../components/spinner/spinner';

export function Favorites(): JSX.Element {

  const { isLoading, favoriteOffers } = useAppSelector((state) => state);

  if (isLoading || !favoriteOffers) {
    return <Spinner />;
  }
  const citiesWithOffers = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  if (favoriteOffers.length === 0) {
    return (
      <>
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
        <footer className="footer">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </>
    );
  }

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesWithOffers.map((city: string) => (
                <FavoriteLocationItem offers={favoriteOffers} city={city} key={city} />
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
