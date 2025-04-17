import { ChangeEvent, useState } from "react";

/* type ReviewsType = {
  reviews: ReviewType[];
};

type ReviewType = {
  id: number;
  img: string;
  name: string;
  rating: string;
  date: string;
  title: string;
  text: string;
}; */

export const Reviews = () => {
  const reviews = [
    {
      id: 1,
      img: "https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg",
      name: "Jane Cooper",
      rating: "4 rating",
      date: "01/01/2021",
      title: "Amazing Product",
      text: "Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad.",
    },
    {
      id: 2,
      img: "https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg",
      name: "Helena Jorney",
      rating: "5 rating",
      date: "09/05/2021",
      title: "Product",
      text: " Du kan vara drabbad. Krofask nystartsjobbDu kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström.Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström. det vill säga vinde. Lörem ipsum sorad Madeleine Engström..   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad.",
    },
  ];

  const [value, setValue] = useState("");

  const [reviewsList, setReviewsList] = useState(reviews);

  const addReviewHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const buttonClickHandler = () => {
   const newReview = {
      id: Math.floor(Math.random() * (1000 - 100) + 100),
      img: "https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg",
      name: "Sugar",
      rating: "1 rating",
      date: "05/05/2021",
      title: "Wow",
      text: value,
    };

    reviewsList.push(newReview);
    console.log(reviewsList);
    setReviewsList(reviewsList);
    setValue("");
  };

  return (
    <div className="review-box">
      <div className="review">
        <h3 className="h3">
          Reviews (<span>{reviews.length}</span>)
        </h3>
        <input
          type="text"
          value={value}
          onChange={addReviewHandler}
          className="textarea"
          placeholder="Provide your text..."
        />
        <button className="review-button" onClick={buttonClickHandler}>
          Send review
        </button>
      </div>
      {/*   отзыв */}
      {reviews.map((review) => {
        return (
          <div key={review.id} className="review-field">
            <div className="info">
              <div className="user">
                <img src={review.img} alt="User-pic" className="img" />
                <div className="info-box">
                  <div className="author">{review.name}</div>
                  <div className="rating">{review.rating}</div>
                </div>
              </div>
              <div className="date">{review.date}</div>
            </div>
            <div className="content-title">{review.title}</div>
            <div>{review.text}</div>
          </div>
        );
      })}
    </div>
  );
};
