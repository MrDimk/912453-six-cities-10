import { MouseEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContainerType, FavoriteButtonTypes, Paths } from '../../const';
import { Offer } from '../../types/types';
import { ratingRate } from '../../utils';
import { FavoriteButton } from '../favorite-button/favorite-button';
import { Mark } from '../mark/mark';

type OfferCardProps = {
  offer: Offer,
  container: ContainerType
  hoverHandler: (offer: Offer | null) => void
};

function OfferCard({ offer, container, hoverHandler }: OfferCardProps): JSX.Element {
  const { id, price, isPremium, previewImage, title, type, rating } = offer;
  const ratingStars = ratingRate(rating);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clickOnCardHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    if (hoverHandler) {
      hoverHandler(null);
    }
    navigate(`${Paths.Room}/${id}`);
  };

  return (
    <article
      className={`${container.classNamePrefix}__card place-card`}
      onMouseOver={() => hoverHandler ? hoverHandler(offer) : ''}
      onMouseOut={() => hoverHandler ? hoverHandler(null) : ''}
    >
      {isPremium && <Mark text="Premium" className="place-card__mark" />}
      <div className={`${container.classNamePrefix}__image-wrapper place-card__image-wrapper`}>
        <a onClick={clickOnCardHandler} href="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offerId={id} type={FavoriteButtonTypes.Card} />
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
