import { useState } from 'react';
import { CitiesList } from '../../components/app/cities/cities-list';
import { OffersMap } from '../../components/map/offers-map';
import OffersList from '../../components/rooms-list/offers-list';
import { SortForm } from '../../components/sort/sort';
import { CITIES, City, ContainerTypes, SortTypes } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { Offer, Offers } from '../../types/types';

type MainProps = {
  offers: Offers,
};

const DEFAULT_SORT = SortTypes[0];

function Main({ offers }: MainProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const relevantOffers = offers.filter((offer) => offer.city.name === currentCity.name);
  const offersCount = relevantOffers.length;
  const dispatch = useAppDispatch();

  const onCityChange = (cityName: string): void => {
    const chosenCity = CITIES.find((city: City): boolean => city.name === cityName) || currentCity;
    dispatch(changeCity({ city: chosenCity }));
  };

  const [currentSort, setSort] = useState(DEFAULT_SORT);
  const sortedOffers = currentSort.compare ? relevantOffers.slice().sort(currentSort.compare) : relevantOffers;

  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList currentCity={currentCity.name} cityClickHandler={onCityChange} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} {offersCount > 1 ? 'places' : 'place'} to stay in {currentCity.name}</b>
            <SortForm currentSort={currentSort} setSort={setSort} />
            <OffersList offers={sortedOffers} container={ContainerTypes.Cities} setActiveOffer={setActiveOffer} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <OffersMap offers={sortedOffers} currentCity={currentCity} activeOffer={activeOffer} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
