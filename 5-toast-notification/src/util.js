export function $(selector) {
  return document.querySelector(selector);
}

export function $All(selector) {
  return document.querySelectorAll(selector);
}

export function getBackgroundColor(type) {
  const color = {
    Success: "green",
    Info: "blue",
    Warning: "orange",
    Error: "red",
  };
  return color[type];
}
