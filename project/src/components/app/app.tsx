import { Offer } from '../../mocks/offers';
import MainPage from '../../pages/main/main';

type AppProps = {
  offers: Offer[],
};

function App({ offers }: AppProps): JSX.Element {
  return <MainPage offers={offers} />;
}

export default App;
