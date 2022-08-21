import { Navigate, useParams } from 'react-router-dom';
import { ImageGallery } from '../../components/image-gallery/image-gallery';
import { InsideFeaturesList } from '../../components/inside-features-list/inside-features-list';
import { Map } from '../../components/map/map';
import { Mark } from '../../components/mark/mark';
import { ReviewsList } from '../../components/reviews/reviews-list';
import OffersList from '../../components/rooms-list/offers-list';
import { City, ContainerTypes } from '../../const';
import { useAppSelector } from '../../hooks';
import { mockReviews, Offer } from '../../mocks/offers';
import { ratingRate } from '../../utils';

type RoomProps = {
  offers: Offer[],
}

export function Room({ offers }: RoomProps): JSX.Element {
  const { id } = useParams();
  const currentCity: City = useAppSelector((state) => state.currentCity);
  const offerData = offers.find((offer) => offer.id === id);
  const similarOffers = offers
    .filter((offer) => offer.location === currentCity.name)
    .filter((offer) => offer.id !== id)
    .slice(0, 3);
  if (!offerData) {
    return <Navigate to="/404" />;
  }
  const { mark, title, rating, type, price, bedrooms, maxAdults, insideFeatures } = offerData;
  const ratingStars = ratingRate(rating);
  const relevantReviews = mockReviews.filter((review) => offerData.reviews.some((item) => item === review.id));

  return (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          <ImageGallery offer={offerData} />
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {mark && <Mark text={mark} className="property__mark" />}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
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
              <InsideFeaturesList insideFeatures={insideFeatures} />
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={offerData.host.proStatus ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' : 'property__avatar-wrapper user__avatar-wrapper'}>
                  <img className="property__avatar user__avatar" src={offerData.host.avatar} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offerData.host.name}
                </span>
                <span className="property__user-status">
                  {offerData.host.proStatus && 'Pro'}
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
          <Map offers={similarOffers} currentCity={currentCity} />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          {similarOffers && <h2 className="near-places__title">Other places in the neighbourhood</h2>}
          {/* <OffersList offers={similarOffers} container={ContainerTypes.NearPlaces} /> */}
          <OffersList offers={similarOffers} container={ContainerTypes.NearPlaces} />
        </section>
      </div>
    </>
  );
}
