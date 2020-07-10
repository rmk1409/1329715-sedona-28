let openButton = document.querySelector(".open-search-form-button");
let searchForm = document.querySelector(".search-form");
let searchButton = document.querySelector(".search-button");

if (openButton && searchForm) {
  openButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle("modal-show");
  });

  if (searchButton) {
    searchButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      let dateIn = document.querySelector(".date-in-input").value;
      let dateOut = document.querySelector(".date-out-input").value;
      let adultCount = document.querySelector(".adult-span-count input").value;
      if (!(dateIn && dateOut && adultCount)) {
        searchForm.classList.remove("modal-error");
        searchForm.offsetWidth = searchForm.offsetWidth;
        searchForm.classList.add("modal-error");
      }
    })
  }
}
