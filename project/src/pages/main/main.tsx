import { CitiesList } from '../../components/app/cities/cities-list';
import { Map } from '../../components/map/map';
import OffersList from '../../components/rooms-list/offers-list';
import { CITIES, City, ContainerTypes } from '../../const';
import { Offer } from '../../mocks/offers';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

type MainProps = {
  offers: Offer[],
};

function MainPage({ offers }: MainProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const relevantOffers = offers.filter((offer) => offer.location === currentCity.name);
  const offersCount = relevantOffers.length;
  const dispatch = useAppDispatch();

  const onCityChange = (cityName: string): void => {
    const chosenCity = CITIES.find((city: City): boolean => city.name === cityName) || currentCity;
    dispatch(changeCity({ city: chosenCity }));
  };

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
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <OffersList offers={relevantOffers} container={ContainerTypes.Cities} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map offers={relevantOffers} currentCity={currentCity} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
