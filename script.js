// Menu toggle functionality
const menuButton = document.getElementById("menuButton");
const menuList = document.getElementById("menuList");

// Toggle the menu on button click
menuButton.addEventListener("click", () => {
    menuList.classList.toggle("show"); // Add/remove the "show" class
});
