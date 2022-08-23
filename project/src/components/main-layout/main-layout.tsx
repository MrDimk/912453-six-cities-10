import { Outlet, useLocation } from 'react-router-dom';
import { AccessType, Paths } from '../../const';
import { useAppSelector } from '../../hooks';
import { SignIn } from '../login/sign-in';
import { SignOut } from '../login/sign-out';
import Logo from '../logo/logo';

function MainLayout() {
  const location = useLocation();
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    <div className={location.pathname === Paths.Root ? 'page page--gray page--main' : 'page'}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            {authorizationStatus === AccessType.authorized ? <SignOut /> : <SignIn />}
            {/* <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={Paths.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{login}</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/login">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
