import { AccessType, Offer } from '../../mocks/mocks';
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

type AppProps = {
  offers: Offer[],
};

function App({ offers }: AppProps): JSX.Element {
  // return <MainPage offers={offers} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout login={'Oliver.conner@gmail.com'} />} >
          <Route index element={<MainPage offers={offers} />} />
          <Route path='offer/:id' element={<Room />} />
          <Route path='favorites' element={
            <PrivateRoute access={AccessType.unauthorized}>
              <Favorites />
            </PrivateRoute>
          }
          />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Message404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
