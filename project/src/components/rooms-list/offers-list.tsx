import { ContainerType } from '../../const';
import { Offer, Offers } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers,
  container: ContainerType,
  setActiveOffer: (offer: Offer | null) => void
};

function OffersList({ offers, container, setActiveOffer }: OffersListProps): JSX.Element {

  const offerCardHoverHandler = (offer: Offer | null): void => setActiveOffer(offer);

  return (
    <div className={container.containerClassName}>
      {offers.map((offer: Offer) => (
        <OfferCard
          offer={offer}
          container={container}
          key={offer.id}
          hoverHandler={offerCardHoverHandler}
        />))}
    </div>
  );
}

export default OffersList;
