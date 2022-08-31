import { Review } from '../../types/types';
import { ratingRate } from '../../utils';
import dayjs from 'dayjs';

type ReviewItemProps = {
  review: Review
};

export function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { user, comment, date, rating } = review;
  const formatedDate = dayjs(date).format('MMM YYYY');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingRate(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formatedDate}</time>
      </div>
    </li>
  );
}
