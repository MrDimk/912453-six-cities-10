import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { FavoriteButton } from '../../components/favorite-button/favorite-button';
import { ImageGallery } from '../../components/image-gallery/image-gallery';
import { InsideFeaturesList } from '../../components/inside-features-list/inside-features-list';
import { OffersMap } from '../../components/offers-map/offers-map';
import { Mark } from '../../components/mark/mark';
import { ReviewsList } from '../../components/reviews/reviews-list/reviews-list';
import OffersList from '../../components/offers/offers-list/offers-list';
import { ContainerTypes, FavoriteButtonTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearbyOffers, fetchOfferAction, fetchReviewsAction } from '../../services/api-actions';
import { Offer, Offers } from '../../types/types';
import { ratingRate } from '../../utils';
import { Spinner } from '../../components/spinner/spinner';

type RoomProps = {
  offers: Offers,
}

export function Room({ offers }: RoomProps): JSX.Element {

  const { id } = useParams();

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.currentCity);
  const offerData = useAppSelector((state) => state.currentOffer);
  const isLoading = useAppSelector((state) => state.isLoading);
  const relevantReviews = useAppSelector((state) => state.currentOfferReviews);
  const nearbyOffers = useAppSelector((state) => state.currentNearbyOffers);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, [dispatch, id]);

  const [activeOffer, setActiveOffer] = useState<Offer | null>(null); // выделенный из числа подобных объявлений

  if (isLoading || !offerData || !relevantReviews || !nearbyOffers) {
    return (<Spinner />);
  }

  if (!offerData) {
    return <Navigate to="/404" />;
  }
  const { isPremium, title, rating, type, price, bedrooms, maxAdults, goods } = offerData;
  const ratingStars = ratingRate(rating);


  return (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          <ImageGallery offer={offerData} />
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && <Mark text="Premium" className="property__mark" />}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <FavoriteButton offerId={Number(id)} type={FavoriteButtonTypes.Room} />
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: ratingStars }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <InsideFeaturesList insideFeatures={goods} />
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={offerData.host.isPro ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' : 'property__avatar-wrapper user__avatar-wrapper'}>
                  <img className="property__avatar user__avatar" src={offerData.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offerData.host.name}
                </span>
                <span className="property__user-status">
                  {offerData.host.isPro && 'Pro'}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offerData.description}
                </p>
              </div>
            </div>
            <ReviewsList reviews={relevantReviews} offerId={`${id}`} />
          </div>
        </div>
        <section className="property__map map">
          <OffersMap offers={nearbyOffers} currentCity={currentCity} activeOffer={activeOffer} />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          {nearbyOffers && <h2 className="near-places__title">Other places in the neighbourhood</h2>}
          <OffersList offers={nearbyOffers} container={ContainerTypes.NearPlaces} setActiveOffer={setActiveOffer} />
        </section>
      </div>
    </>
  );
}
