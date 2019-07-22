const navContent = document.querySelector(".nav-content");
const navButton = document.querySelector(".nav-collapse");
const years = document.querySelectorAll(".year");
const date = new Date();

function toggleNavbar() {
	navButton.classList.toggle("nav-active");
	navContent.classList.toggle("nav-active");
}

function formatDates() {
	for (let i = 0; i < years.length; i++) {
		let year = years[i];
		let value = parseInt(year.textContent, 10);
		let duration = date.getFullYear() - value;
		let word = duration === 1 ? "year" : "years";

		if (duration <= 0) {
			duration = "<1";
			word = "year";
		}

		year.textContent = duration + " " + word;
		year.setAttribute("tooltip", "Since " + value);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// Toggle context menu
	navButton.addEventListener("click", () => {
		toggleNavbar();
	});

	formatDates();
});
