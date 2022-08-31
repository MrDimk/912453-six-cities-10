import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccessType, FavoriteButtonTypes, Paths } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleFavoriteStatusAction } from '../../services/api-actions';

type FavoriteButtonProps = {
  offerId: number,
  type: typeof FavoriteButtonTypes.Card | typeof FavoriteButtonTypes.Room
};

export function FavoriteButton({ offerId, type }: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { authorizationStatus, favoriteOffers } = useAppSelector((state) => state);
  const navigate = useNavigate();

  let isFavorite = false;
  if (favoriteOffers && favoriteOffers.length > 0) {
    isFavorite = favoriteOffers.some((favoriteOffer) => favoriteOffer.id === offerId);
  }

  const className = isFavorite ? `${type.className}-button button ${type.className}-button--active`
    : `${type.className}-button button`;

  const buttonClickHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    if (authorizationStatus === AccessType.authorized) {
      dispatch(toggleFavoriteStatusAction({ offerId: offerId, newState: Number(!isFavorite) }));
    } else {
      navigate(Paths.Login);
    }
  };

  return (
    <button
      onClick={buttonClickHandler}
      className={className}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={type.width} height={type.heigth}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
