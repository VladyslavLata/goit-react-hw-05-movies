"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Api_1 = require("Api/Api");
const Message_1 = require("components/Message/Message");
const Loader_1 = require("components/Loader/Loader");
const ReviewsCard_1 = require("components/ReviewsCard/ReviewsCard");
const useGetArreyDataPage_1 = require("Hooks/useGetArreyDataPage");
const noReviewsMessage = 'There are no reviews for this movie.';
const Reviews = () => {
    const { movieId } = (0, react_router_dom_1.useParams)();
    const [reviews, status, error] = (0, useGetArreyDataPage_1.useGetArreyDataPage)(Api_1.getReviews, movieId);
    return (<>
      {status === 'pending' && <Loader_1.Loader />}
      {status === 'resolved' && reviews.length > 0 && (<section>
          <ul>
            <ReviewsCard_1.ReviewsCard reviews={reviews}/>
          </ul>
        </section>)}
      {status === 'resolved' && reviews.length < 1 && (<Message_1.Message message={noReviewsMessage}/>)}
      {status === 'rejected' && <Message_1.Message message={error}/>}
    </>);
};
exports.default = Reviews;
//# sourceMappingURL=Reviews.jsx.map