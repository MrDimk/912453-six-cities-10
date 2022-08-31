import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { Ratings } from '../../const';
import { useAppDispatch } from '../../hooks';
import { postNewReviewAction } from '../../services/api-actions';

type NewCommentFormProps = {
  offerId: string,
};

const MIN_COMMENT_LENGTH = 50;

export function NewCommentForm({ offerId }: NewCommentFormProps): JSX.Element {
  const formRef = useRef(null);
  const dispatch = useAppDispatch();
  const [currentFormData, setFormData] = useState({
    rating: Ratings.Default,
    comment: '',
  });
  const [isDisabled, setDisabledStatus] = useState(false);


  const fieldsChangeHandler = (evt: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = evt.target;
    if (currentFormData.comment.length >= MIN_COMMENT_LENGTH && currentFormData.rating > 0) {
      setDisabledStatus(true);
    } else if (name === 'review' && value.length < MIN_COMMENT_LENGTH) {
      setDisabledStatus(false);
    }
    setFormData({ ...currentFormData, [name]: value });
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(postNewReviewAction({ id: Number(offerId), newComment: currentFormData }));
    setFormData({ rating: 0, comment: '' });
  };

  return (
    <form
      ref={formRef}
      className="reviews__form form"
      action="POST"
      method="post"
      onChange={fieldsChangeHandler}
      onSubmit={formSubmitHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input defaultChecked={currentFormData.rating === Ratings.fiveStars} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input defaultChecked={currentFormData.rating === Ratings.fourStars} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input defaultChecked={currentFormData.rating === Ratings.threeStars} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input defaultChecked={currentFormData.rating === Ratings.twoStars} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input defaultChecked={currentFormData.rating === Ratings.oneStar} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isDisabled}>Submit</button>
      </div>
    </form>
  );
}
