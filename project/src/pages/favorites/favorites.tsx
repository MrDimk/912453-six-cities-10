import { useEffect } from 'react';
import { FavoriteLocationItem } from '../../components/favorites-location-item/favorites-location-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffers } from '../../services/api-actions';
import { Offers } from '../../types/types';
import { Spinner } from '../main/spinner';

type FavoritesProps = {
  offers: Offers,
}

export function Favorites({ offers }: FavoritesProps): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  const { isLoading, favoriteOffers } = useAppSelector((state) => state);

  if (isLoading || !favoriteOffers) {
    return <Spinner />;
  }
  // const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const citiesWithOffers = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

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
