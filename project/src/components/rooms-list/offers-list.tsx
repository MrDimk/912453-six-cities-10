import { useState } from 'react';
import { Offer } from '../../mocks/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[],
};

function OffersList({ offers }: OffersListProps): JSX.Element {

  const [, setActiveOffer] = useState({ id: '' });

  const offerCardHoverHandler = (offer: Offer): void => setActiveOffer({ id: offer.id });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => <OfferCard offer={offer} key={offer.id} hoverHandler={offerCardHoverHandler} />)}
    </div>
  );
}

export default OffersList;
