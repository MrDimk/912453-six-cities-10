import { Link } from 'react-router-dom';
import { Offer } from '../../mocks/offers';
import { ratingRate } from '../../utils';
import { Mark } from '../mark/mark';

type FavoriteOfferCardProps = {
  offer: Offer,
};

export function FavoriteOfferCard({ offer }: FavoriteOfferCardProps): JSX.Element {
  const { id, mark, title, rating, price, type, image } = offer;

  return (
    <article className="favorites__card place-card">
      {mark && <Mark text={mark} className="place-card__mark" />}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={image} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingRate(rating) }}></span>
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
