const searchBtn = document.querySelector(".search_icon");
const searchInput = document.querySelector(".search_input");

searchBtn.addEventListener("click", () => {
    if (searchInput.value.trim() === "") {
        alert("Please enter something to search.");
    } else {
        alert("Searching for: " + searchInput.value);
    }
});