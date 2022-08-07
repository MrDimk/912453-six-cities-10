import { NavLink } from 'react-router-dom';

const getClassToLogoLink = ({ isActive }: { isActive: boolean }) => isActive ? 'header__logo-link header__logo-link--active' : 'header__logo-link';

function Logo() {
  return (
    <NavLink to={'/'} className={getClassToLogoLink}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </NavLink>
  );
}

export default Logo;
