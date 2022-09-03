import { Outlet, useLocation } from 'react-router-dom';
import { AccessType, Paths } from '../../const';
import { useAppSelector } from '../../hooks';
import { SignIn } from '../login/sign-in/sign-in';
import { SignOut } from '../login/sign-out/sign-out';
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
