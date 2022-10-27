import { useParams } from 'react-router-dom';
import { getReviews } from 'Api/Api';
import { Message } from 'components/Message/Message';
import { Loader } from 'components/Loader/Loader';
import { ReviewsCard } from 'components/ReviewsCard/ReviewsCard';
import { useGetArreyDataPage } from 'Hooks/useGetArreyDataPage';
import { IReview } from 'types/types';

const noReviewsMessage = 'There are no reviews for this movie.';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, status, error] = useGetArreyDataPage(
    getReviews,
    movieId
  );

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && reviews.length > 0 && (
        <section>
          <ul>
            <ReviewsCard reviews={reviews as IReview[]} />
          </ul>
        </section>
      )}
      {status === 'resolved' && reviews.length < 1 && (
        <Message message={noReviewsMessage} />
      )}
      {status === 'rejected' && <Message message={error as string} />}
    </>
  );
};

export default Reviews;
