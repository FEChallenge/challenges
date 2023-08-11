import RatingForm from "./components/RatingForm/RatingForm.js";

let state = { starRating: 3 };

function setState(newState) {
  state = { ...state, ...newState };
  renderApp();
}

function renderApp() {
  const app = document.querySelector(".app");
  const ratingForm = new RatingForm({ container: app, state });
  ratingForm.render();
}

renderApp();

export { setState };
