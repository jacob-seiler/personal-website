const navButton = document.querySelector(".nav-button");
const navContent = document.querySelector(".nav-content");

function toggleNav() {
	navButton.classList.toggle("nav-active");
	navContent.classList.toggle("nav-active");
}
