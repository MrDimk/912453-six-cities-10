import { Review } from '../../mocks/offers';
import { NewCommentForm } from '../new-comment-form/new-comment-form';
import { ReviewItem } from './review-item';

type ReviewsListProps = {
  reviews: Review[],
  offerId: string,
};

export function ReviewsList({ reviews, offerId }: ReviewsListProps): JSX.Element {
  const reviewsCount = reviews.length;
  return (
    <section className="property__reviews reviews">
      {reviewsCount ? <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2> : null}
      <ul className="reviews__list">
        {reviews.map((item) => <ReviewItem review={item} key={item.id} />)}
      </ul>
      <NewCommentForm offerId={`${offerId}`} />
    </section>
  );
}
