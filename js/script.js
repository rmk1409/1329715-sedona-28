let openButton = document.querySelector(".open-search-form-button");
let searchForm = document.querySelector(".search-form");
let searchButton = document.querySelector(".search-button");

if (openButton && searchForm) {
  searchForm.classList.toggle("modal-show");

  openButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle("modal-show");
    searchForm.classList.remove("modal-error");
  });
}

if (searchButton) {
  searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.remove("modal-error");
    let dateIn = document.querySelector(".date-in-input").value;
    let dateOut = document.querySelector(".date-out-input").value;
    let adultCount = document.querySelector(".adult-div-count input").value;
    if (!(dateIn && dateOut && adultCount)) {
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("modal-error");
    }
  })
}
