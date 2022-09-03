import { AccessType } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { Reviews } from '../../../types/types';
import { NewCommentForm } from '../../new-comment-form/new-comment-form';
import { ReviewItem } from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Reviews,
  offerId: string,
};

export function ReviewsList({ reviews, offerId }: ReviewsListProps): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);

  const reviewsCount = reviews.length;
  return (
    <section className="property__reviews reviews">
      {reviewsCount ? <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2> : null}
      <ul className="reviews__list">
        {reviews.map((item) => <ReviewItem review={item} key={item.id} />)}
      </ul>
      {authorizationStatus === AccessType.authorized ? <NewCommentForm offerId={`${offerId}`} /> : ''}
    </section>
  );
}
