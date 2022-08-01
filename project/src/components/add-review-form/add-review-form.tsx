import React, {ChangeEvent, useState} from 'react';

const ratingValues = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function AddReviewForm() {
  const [reviewData, setReviewData] = useState({
    rating: 0,
    reviewText: '',
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {value, name} = evt.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              [
                ratingValues.map((item) => (
                  <React.Fragment
                    key = {item}
                  >
                    <input
                      className="rating__input"
                      id={`star-${item}`} type="radio"
                      name="rating"
                      value={`${item}`}
                      onChange={handleChange}
                    />
                    <label className="rating__label" htmlFor={`star-${item}`}>Rating ${item}</label>
                  </React.Fragment>
                ))
              ]
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="reviewText"
            id="review-text"
            placeholder="Review text"
            onChange={handleChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
