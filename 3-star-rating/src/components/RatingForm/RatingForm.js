import { RATING_MESSAGE } from "../../constants/message.js";
import { setState } from "../../script.js";
import FiveStar from "../FiveStar/FiveStar.js";

class RatingForm {
  constructor({ container, state }) {
    this.container = container;
    this.state = state;
  }
  template() {
    return `<div class="rating-form">
              <span class="rating-header">How many stars would you give to our Online Code Editor?</span>
              ${new FiveStar({ state: this.state }).template()}
              <span class="rating-message">${RATING_MESSAGE[this.state.starRating]}</span>
            </div>`;
  }
  render() {
    this.container.innerHTML = this.template();
    this.addEvent();
  }
  addEvent() {
    const starContainer = document.querySelector(".star-container");
    starContainer.addEventListener("click", (e) => this.handleStarClick(e));
    starContainer.addEventListener("mouseover", (e) => this.handleStarMouseOver(e));
    starContainer.addEventListener("mouseleave", () => this.handleStarMouseLeave());
  }
}

RatingForm.prototype.handleStarMouseLeave = function () {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.classList.remove("active");
    star.classList.remove("inactive");
  });
};

RatingForm.prototype.handleStarMouseOver = function (e) {
  const { target } = e;
  const isOveredStar = target.tagName === "path";
  if (isOveredStar) {
    const overedStarIndex = this.getStarIndex(target);
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, i) => {
      const isLeftOfOveredStar = i <= overedStarIndex;
      if (isLeftOfOveredStar) {
        star.classList.add("active");
        star.classList.remove("inactive");
        return;
      }
      star.classList.add("inactive");
      star.classList.remove("active");
    });
  }
};

RatingForm.prototype.handleStarClick = function (e) {
  const { target } = e;
  const isClickedStar = target.tagName === "path";
  if (isClickedStar) {
    const clickedStarIndex = this.getStarIndex(target);
    setState({ starRating: clickedStarIndex + 1 });
  }
};

RatingForm.prototype.getStarIndex = function (target) {
  const star = target.parentNode;
  const stars = [...star.parentNode.children];
  return stars.indexOf(star);
};

export default RatingForm;
