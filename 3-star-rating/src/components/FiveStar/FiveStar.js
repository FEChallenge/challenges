import Star from "../Star/Star.js";

const STAR_LENGTH = 5;

class FiveStar {
  constructor({ state }) {
    this.state = state;
    this.star = new Star();
  }
  template() {
    const { starRating } = this.state;
    return `<div class="star-container">
              ${Array.from({ length: STAR_LENGTH })
                .map((_, idx) => this.star.template({ isFilled: idx < starRating }))
                .join("")}
            </div>`;
  }
}

export default FiveStar;
