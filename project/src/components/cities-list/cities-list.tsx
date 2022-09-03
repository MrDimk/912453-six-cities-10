import { NavLink } from 'react-router-dom';
import { CITIES, Paths } from '../../const';

type CitiesListProps = {
  currentCity: string,
  cityClickHandler: (cityName: string) => void
};

export function CitiesList({ currentCity, cityClickHandler }: CitiesListProps): JSX.Element {
  const cities = CITIES.map((city) => city.name);

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li className="locations__item" key={city}>
            <NavLink
              className={`locations__item-link tabs__item${currentCity === city ? ' tabs__item--active' : ''}`}
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
