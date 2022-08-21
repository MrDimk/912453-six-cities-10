import { NavLink } from 'react-router-dom';
import { CITIES, Paths } from '../../../const';

type CitiesListProps = {
  currentCity: string,
  cityClickHandler: (cityName: string) => void
};

// const clickHandler = (city:City) => {

// }

export function CitiesList({ currentCity, cityClickHandler }: CitiesListProps): JSX.Element {
  const cities = CITIES.map((city) => city.name);

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li className="locations__item" key={city}>
            <NavLink
              className={currentCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              to={Paths.Root}
              onClick={() => cityClickHandler(city)}
            >
              <span>{city}</span>
            </NavLink>
          </li>
        ))
      }
    </ul >
  );
}
