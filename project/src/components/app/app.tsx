import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Main from '../../pages/main/main';
import Message404 from '../404/message-404';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { Room } from '../../pages/room/room';
import PrivateRoute from '../private-route/private-route';
import MainLayout from '../main-layout/main-layout';
import { AccessType, Paths } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Spinner } from '../spinner/spinner';
import { useEffect } from 'react';
import { fetchFavoriteOffers } from '../../services/api-actions';

export function App(): JSX.Element {
  const { offers, authorizationStatus, isLoading } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AccessType.authorized) {
      dispatch(fetchFavoriteOffers());
    }
  }, [authorizationStatus, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Root} element={<MainLayout />} >
          {isLoading && <Route index element={<Spinner />} />}
          {!isLoading && <Route index element={<Main offers={offers} />} />}
          <Route path='offer/:id' element={<Room offers={offers} />} />
          <Route path='favorites' element={
            <PrivateRoute access={authorizationStatus}>
              <Favorites />
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
