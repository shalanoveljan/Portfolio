const statContainer = document.querySelector(".some-facts .container .row");

const createBox = (icon, title, number) => {
  return `<div class="col-lg-3 col-sm-6">
                <div class="items">
                    <span class="${icon}"></span>
                    <h3>
                        <span class="counter" id="{${title}}">${number}</span>
                    </h3>
                    <div class="line mx-auto"></div>
                    <h4>${title}</h4>
                </div>
            </div>`;
};

export function createStatistics(
  data,
  iconKey = "icon",
  numberKey = "number",
  titleKey = "title"
) {
  statContainer.innerHTML = "";

  data.forEach((x) => {
    const card = createBox(x[iconKey], x[titleKey], x[numberKey]);

    statContainer.innerHTML += card;
  });
}
