import { ChangeEvent, FormEvent, useState } from 'react';
import { Ratings } from '../../const';
import { useAppDispatch } from '../../hooks';
import { postNewReviewAction } from '../../services/api-actions';
import { RatingInput } from '../rating-input/rating-input';

type NewCommentFormProps = {
  offerId: string,
};

const MIN_COMMENT_LENGTH = 50;

export function NewCommentForm({ offerId }: NewCommentFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [currentFormData, setFormData] = useState({
    rating: Ratings.Default,
    comment: '',
  });
  const [isDisabled, setDisabledStatus] = useState(false);

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(postNewReviewAction({ id: Number(offerId), newComment: currentFormData }));
    setFormData({ rating: Ratings.Default, comment: '' });
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    validateNewReviewForm(Number(value), currentFormData.comment);
    setFormData({ ...currentFormData, [name]: Number(value) });
  };

  const commentTextChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    validateNewReviewForm(currentFormData.rating, value);
    setFormData({ ...currentFormData, [name]: value });
  };

  const validateNewReviewForm = (rating: Ratings, comment: string) => {
    setDisabledStatus(rating > Ratings.Default && comment.length >= MIN_COMMENT_LENGTH);
  };

  return (
    <form
      className="reviews__form form"
      action="POST"
      method="post"
      onSubmit={formSubmitHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingInput onRatingChange={ratingChangeHandler} currentRating={currentFormData.rating} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={currentFormData.comment}
        onChange={commentTextChangeHandler}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isDisabled}>Submit</button>
      </div>
    </form>
  );
}
