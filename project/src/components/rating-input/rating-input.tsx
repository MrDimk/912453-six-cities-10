import { ChangeEvent, EventHandler } from 'react';
import { Ratings } from '../../const';
type RatingInputProps = {
  currentRating: Ratings,
  onRatingChange: EventHandler<ChangeEvent<HTMLInputElement>>
}
export function RatingInput({ currentRating, onRatingChange }: RatingInputProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      <input checked={currentRating === Ratings.fiveStars} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={onRatingChange} />
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
      <input checked={currentRating === Ratings.fourStars} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={onRatingChange} />
      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
      <input checked={currentRating === Ratings.threeStars} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={onRatingChange} />
      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
      <input checked={currentRating === Ratings.twoStars} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={onRatingChange} />
      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
      <input checked={currentRating === Ratings.oneStar} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={onRatingChange} />
      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </div>
  );
}
