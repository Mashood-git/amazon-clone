const searchBtn = document.querySelector(".search_icon");
const searchInput = document.querySelector(".search_input");

searchBtn.addEventListener("click", () => {
    if (searchInput.value.trim() === "") {
        alert("Please enter something to search.");
    } else {
        alert("Searching for: " + searchInput.value);
    }
});
// CART FEATURE

// CART FEATURE

let cartCount = localStorage.getItem("cartCount");

if (cartCount === null) {
    cartCount = 0;
} else {
    cartCount = Number(cartCount);
}

const cartNumber = document.getElementById("cart-count");
cartNumber.textContent = cartCount;
const addButtons = document.querySelectorAll(".add-cart");
const notification = document.getElementById("notification");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartNumber.textContent = cartCount;

        localStorage.setItem("cartCount", cartCount);

        notification.style.display = "block";

        setTimeout(() => {
            notification.style.display = "none";
        }, 2000);

    });

});

const clearCart = document.getElementById("clear-cart");

clearCart.addEventListener("click", () => {
    cartCount = 0;
    cartNumber.textContent = cartCount;
    localStorage.setItem("cartCount", cartCount);
});