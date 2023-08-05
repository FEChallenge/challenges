import Component from "../core/Component.js";

export default class StarRatingItem extends Component {
  setup() {
    this.$target.setAttribute("class", "star_rating_item");
    this.$target.setAttribute("data-value", this.$props.value);
    this.$target.setAttribute("width", "77");
    this.$target.setAttribute("height", "74");
    this.$target.setAttribute("viewBox", "0 0 77 74");
    this.$target.setAttribute("fill", "#E2E8F0");
  }

  isFulled(value) {
    if (this.$props.hoverValue > 0) {
      return value <= this.$props.hoverValue;
    } else {
      return value <= this.$props.ratingValue;
    }
  }

  template() {
    return `<path
    id="star"
    fill="${this.isFulled(this.$props.value) ? "url(#full-star)" : ""}"
    d="M25.3504 22.69L3.02041 25.9275L2.62491 26.008C2.0262 26.1669 1.4804 26.4819 1.04324 26.9208C0.606076 27.3597 0.293225 27.9067 0.136631 28.506C-0.019964 29.1054 -0.0146914 29.7355 0.15191 30.3322C0.318511 30.9288 0.640471 31.4705 1.08491 31.902L17.2619 47.6485L13.4469 69.891L13.4014 70.276C13.3648 70.8952 13.4933 71.5131 13.774 72.0663C14.0546 72.6195 14.4773 73.0881 14.9986 73.4243C15.5199 73.7605 16.1212 73.952 16.7409 73.9794C17.3606 74.0067 17.9765 73.8689 18.5254 73.58L38.4964 63.08L58.4219 73.58L58.7719 73.741C59.3496 73.9686 59.9775 74.0383 60.5911 73.9432C61.2046 73.848 61.7818 73.5913 62.2635 73.1994C62.7451 72.8076 63.1139 72.2946 63.3318 71.7132C63.5498 71.1318 63.6092 70.5029 63.5039 69.891L59.6854 47.6485L75.8694 31.8985L76.1424 31.601C76.5324 31.1207 76.7881 30.5456 76.8834 29.9343C76.9788 29.323 76.9104 28.6973 76.6852 28.1211C76.4601 27.5448 76.0862 27.0385 75.6016 26.6538C75.1171 26.2691 74.5392 26.0197 73.9269 25.931L51.5969 22.69L41.6149 2.46C41.3261 1.87387 40.8789 1.3803 40.3241 1.03517C39.7692 0.690029 39.1288 0.507107 38.4754 0.507107C37.822 0.507107 37.1816 0.690029 36.6268 1.03517C36.0719 1.3803 35.6248 1.87387 35.3359 2.46L25.3504 22.69Z"
  />`;
  }

  handleMouseEnter({ target }) {
    const ratingValue = target.dataset.value;
    this.$props.setHoverValue(ratingValue);
  }

  handleClick() {
    this.$props.setRatingValue(+this.$props.hoverValue);
  }

  setEvent() {
    this.$target.addEventListener("mouseenter", this.handleMouseEnter.bind(this));
    this.$target.addEventListener("click", this.handleClick.bind(this));
  }
}
