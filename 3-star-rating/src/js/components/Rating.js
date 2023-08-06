import { MSG, RATING } from '../constants/index.js';
import { $ } from '../utils/index.js';
import Star from './Star.js';

class Rating {
  constructor(number) {
    this.number = number;
    this.rating = RATING.INIT.value;
    this.stars = [];
  }

  init = () => {
    this.render();
    this.createStar(this.number);
  };

  render = () => {
    const rating = $('.rating');
    rating?.insertAdjacentHTML('beforeend', this.createHTML());
  };

  createHTML = () => {
    return `<h1>${MSG.GUIDANCE}</h1>
      <div class='stars'></div>
      <span class='rating-msg'></span>
      `;
  };

  createStar = (number) => {
    for (let index = 0; index < number; index += 1) {
      this.stars.push(new Star(index, RATING.INIT.value, this.setRating));
    }
  };


  setRating = (newValue) => {
    this.rating = newValue;
    this.updateStars(newValue);
      this.stars.push(new Star(index, RATING.INIT.value));
  };

  calcStarValue = (rating, index) => {
    const totalOnStarNum = Math.ceil(rating);
    if (index === totalOnStarNum && !Number.isInteger(rating)) {
      return RATING.HALF.value;
    }
    return index <= totalOnStarNum ? RATING.ON.value : RATING.INIT.value;
  };

  updateStars = (rating) => {
    for (let index = 0; index < this.number; index += 1) {
      const value = this.calcStarValue(rating, index + 1);
      this.stars[index].updateState(value);
    }
  };
}

export default Rating;