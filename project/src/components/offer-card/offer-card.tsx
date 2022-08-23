import { Link } from 'react-router-dom';
import { ContainerType } from '../../const';
import { Offer } from '../../types/types';
import { ratingRate } from '../../utils';
import { Mark } from '../mark/mark';

type OfferCardProps = {
  offer: Offer,
  container: ContainerType
  hoverHandler: (offer: Offer) => void,
};

function OfferCard({ offer, container, hoverHandler }: OfferCardProps): JSX.Element {
  const { id, price, isPremium, previewImage, title, type, isFavorite, rating } = offer;
  const ratingStars = ratingRate(rating);

  return (
    <article className={`${container.classNamePrefix}__card place-card`} onMouseOver={() => hoverHandler(offer)}>
      {isPremium && <Mark text="Premium" className="place-card__mark" />}
      <div className={`${container.classNamePrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingStars }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
