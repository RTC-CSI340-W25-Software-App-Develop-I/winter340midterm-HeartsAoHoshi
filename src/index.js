//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//1. Append the reviews to the DOM
function renderReview(review) {
  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('review_container');
  const reviewImage = document.createElement('img');
  reviewImage.src = review.image;
  const reviewContent = document.createElement('div');
  const username = document.createElement('p');
  username.textContent = review.username;
  const starRating = document.createElement('p');
  starRating.textContent = `Star Rating: ${review.star}`;
  const reviewText = document.createElement('p');
  reviewText.textContent = review.review;
  reviewContent.append(username, starRating, reviewText);
  reviewContainer.append(reviewImage, reviewContent);
  document.querySelector('.reviews').appendChild(reviewContainer);
}
reviews.forEach(renderReview);
//2. Append new reviews to the DOM from the form
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); 
  const username = document.getElementById('username').value;
  const image = document.getElementById('image').value;
  const star = document.getElementById('star').value;
  const review = document.getElementById('review').value;
  const newReview = { username, image, star: parseInt(star), review };
reviews.push(newReview);
renderReview(newReview);
e.target.reset();
});