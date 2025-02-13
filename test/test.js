import { assert } from "chai";
import { calculateStarAverage } from "../src/logic.js";

const mockReviews = [
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
    image: "./images/avatar3.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

describe('calculateStarAverage',()=>{
  it('This will give us the average of all of the reviews ',() => {
    const result =calculateStarAverage(mockReviews);
    assert.strictEqual(result,3,'the calculator says its 3')
  });
  it('We should have all the reviews sorted by lowest to highest', () => {
    const sortedReviews = [...mockReviews].sort((a, b) => a.star - b.star);

    assert.strictEqual(sortedReviews[0].star, 1, 'The first lowest star rating is 1');
    assert.strictEqual(sortedReviews[1].star, 3, 'The second star rating is 3');
    assert.strictEqual(sortedReviews[2].star, 5, 'The highest star rating is 5');
  });
});