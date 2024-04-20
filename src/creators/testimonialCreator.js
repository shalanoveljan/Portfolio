const testimonialsContainer = document.querySelector(".carousel-inner");

const createCarouselItem = (
  fullname,
  position,
  description,
  profilePicture,
  idx
) => {
  return `<div class="carousel-item ${idx == 0 ? "active" : ""} text-center">
            <img src="img/testimonials.png" alt="" class="colon" />
            <p>
                ${description}
            </p>
            <img src="${profilePicture}" alt="" class="center-block team" />
            <h3>${fullname}</h3>
            <h4>${position}</h4>
        </div>`;
};

export function createTestimonials(
  data,
  fullname = "fullname",
  position = "position",
  description = "description",
  profilePicture = "profile-picture"
) {
  testimonialsContainer.innerHTML = "";
  data.forEach((x, idx) => {
    const item = createCarouselItem(
      x[fullname],
      x[position],
      x[description],
      x[profilePicture],
      idx
    );
    testimonialsContainer.innerHTML += item;
  });
}
