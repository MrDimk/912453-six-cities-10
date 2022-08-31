import { Link } from 'react-router-dom';
import { FavoriteButtonTypes } from '../../const';
// import { useFavorite } from '../../hooks/use-favorite/use-favorite';
import { Offer } from '../../types/types';
import { ratingRate } from '../../utils';
import { FavoriteButton } from '../favorite-button/favorite-button';
import { Mark } from '../mark/mark';

type FavoriteOfferCardProps = {
  offer: Offer,
};

export function FavoriteOfferCard({ offer }: FavoriteOfferCardProps): JSX.Element {
  const { id, isPremium, title, rating, price, type, previewImage } = offer;
  // const isFavorite = useFavorite(offer);

  return (
    <article className="favorites__card place-card">
      {isPremium && <Mark text="Premium" className="place-card__mark" />}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offerId={id} type={FavoriteButtonTypes.Card} />
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
