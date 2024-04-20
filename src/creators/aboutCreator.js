const element = document.querySelector(".about-me p");

export const createAbout = (data) => {
  element.textContent = data;
};
