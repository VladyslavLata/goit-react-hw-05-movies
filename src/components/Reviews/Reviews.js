import { useParams } from 'react-router-dom';
import { getReviews } from 'Api/Api';
import { Message } from 'components/Message/Message';
import { Loader } from 'components/Loader/Loader';
import { ReviewsCard } from 'components/ReviewsCard/ReviewsCard';
import { useGetArreyDataPage } from 'Hooks/useGetArreyDataPage';

const noReviewsMessage = 'There are no reviews for this movie.';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, status, error] = useGetArreyDataPage(
    getReviews,
    'results',
    movieId
  );

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && reviews.length > 0 && (
        <section>
          <ul>
            <ReviewsCard reviews={reviews} />
          </ul>
        </section>
      )}
      {status === 'resolved' && reviews.length < 1 && (
        <Message message={noReviewsMessage} />
      )}
      {status === 'rejected' && <Message message={error.message} />}
    </>
  );
};

export default Reviews;
