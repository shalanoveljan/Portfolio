const homePositionsSection = document.querySelector(".cd-words-wrapper");
const homeDescriptionElement = document.querySelector(".slider .paragraph");

export const createHome = (positions, description) => {
  positions.forEach((position, idx) => addAnimatedTextElement(position, idx));
  homeDescriptionElement.textContent = description;
};

function addAnimatedTextElement(str, idx) {
  const text = document.createElement("b");
  text.textContent = str;
  if (idx == 0) text.className = "is-visible";
  homePositionsSection.appendChild(text);
}
