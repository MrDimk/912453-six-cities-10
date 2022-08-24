import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from '../../pages/main/main';
import Message404 from '../404/message-404';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { Room } from '../../pages/room/room';
import PrivateRoute from '../private-route/private-route';
import MainLayout from '../main-layout/main-layout';
import { Paths } from '../../const';
import { useAppSelector } from '../../hooks';
import { Spinner } from '../../pages/main/spinner';

export function App(): JSX.Element {
  const { offers, authorizationStatus, isLoading } = useAppSelector((state) => state);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Root} element={<MainLayout />} >
          {isLoading && <Route index element={<Spinner />} />}
          {!isLoading && <Route index element={<MainPage offers={offers} />} />}
          <Route path='offer/:id' element={<Room offers={offers} />} />
          <Route path='favorites' element={
            <PrivateRoute access={authorizationStatus}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
          />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='404' element={<Message404 />} />
        <Route path='*' element={<Message404 />} />
      </Routes>
    </BrowserRouter>
  );
}
