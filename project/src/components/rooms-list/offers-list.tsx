import { useState } from 'react';
import { ContainerType } from '../../const';
import { Offer } from '../../mocks/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[],
  container: ContainerType
};

function OffersList({ offers, container }: OffersListProps): JSX.Element {

  const [, setActiveOffer] = useState({ id: '' });

  const offerCardHoverHandler = (offer: Offer): void => setActiveOffer({ id: offer.id });

  return (
    <div className={container.containerClassName}>
      {offers.map((offer: Offer) => <OfferCard offer={offer} container={container} key={offer.id} hoverHandler={offerCardHoverHandler} />)}
    </div>
  );
}

export default OffersList;
