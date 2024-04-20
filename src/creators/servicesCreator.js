const container = document.querySelector(".services .container .row");

const createBox = (title, description) => {
  description.length > 105
    ? (description = description.slice(0, 108) + "...")
    : (description = description);

  return `<div class="col-md-6 col-lg-4">
            <div class="box">
                <span class="fa fa-cog"></span>
                <h3>${title}</h3>
                <p>
                ${description}
                </p>
            </div>
          </div>`;
};

export function createServices(
  data,
  titleKey = "title",
  descKey = "description"
) {
  container.innerHTML = "";
  data.forEach((card) => {
    const box = createBox(card[titleKey], card[descKey]);
    container.innerHTML += box;
  });
}
