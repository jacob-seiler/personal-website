const scrollStops = document.querySelectorAll(".scrollstop");
const poppableElements = document.querySelectorAll(".poppable");
const dates = document.querySelectorAll(".date");

const navButton = document.querySelector(".nav-button");
const navContent = document.querySelector(".nav-content");

const landingTitle = document.querySelector(".landing-title");

const profilePicAmount = 3;
let profilePicIndex = 0;

function nextProfilePic(e) {
	profilePicIndex += 1;

	if (profilePicIndex >= profilePicAmount) {
		profilePicIndex = 0;
	}

	setTimeout(function() {
		e.src = "assets/profile-" + profilePicIndex + ".png";
	}, 100);
}

function popElement(e) {
	e.classList.add("pop");
	e.addEventListener("animationend", function() {
		e.classList.remove("pop");
	});
}

function toggleNav(action) {
	if (action === undefined) {
		navButton.classList.toggle("nav-active");
		navContent.classList.toggle("nav-active");
	} else if (action) {
		navButton.classList.add("nav-active");
		navContent.classList.add("nav-active");
	} else {
		navButton.classList.remove("nav-active");
		navContent.classList.remove("nav-active");
	}
}

function animateText(element, message) {
	let totalTime = 0;

	for (let i = 0; i <= message.length; i++) {
		let delay = Math.random() * (300 - 100) + 100;
		let delayComma = Math.random() * (400 - 300) + 300;
		let delayEnd = Math.random() * (1000 - 400) + 400;

		if (i > 1 && message.substring(i - 2, i - 1) === ",") {
			delay = delayComma;
		}

		totalTime += delay;

		setTimeout(() => {
			element.textContent = message.substr(0, i) + "|";

			if (i === message.length) {
				setTimeout(() => {
					element.textContent = message;
				}, delayEnd);
			}
		}, totalTime);
	}
}

function formateDate(element) {
	const currentDate = new Date();

	const dateMonth = parseInt(element.textContent.split("/")[0]);
	const dateYear = parseInt(element.textContent.split("/")[1]);

	let difference = (currentDate.getFullYear() - dateYear) * 12;
	difference -= dateMonth - 1;
	difference += currentDate.getMonth();
	difference = difference <= 0 ? 0 : difference;

	if (difference >= 12) {
		element.textContent =
			Math.floor(difference / 12) + " year" + (Math.floor(difference / 12) === 1 ? "" : "s");
	} else {
		element.textContent = difference + " month" + (difference === 1 ? "" : "s");
	}
}

document.addEventListener("scroll", () => {
	let largestIndex = 0;

	for (let i = 0; i < scrollStops.length; i++) {
		if (scrollStops[i].getBoundingClientRect().top - 1 <= 0) {
			if (i > largestIndex) {
				largestIndex = i;
			}
		}
	}

	let scrollID = scrollStops[largestIndex].id;

	for (let i = 0; i < navContent.children.length; i++) {
		let element = navContent.children[i].children[0];
		element.classList.remove("nav-active");

		if (element.href.split("#")[1] === scrollID) {
			element.classList.add("nav-active");
		}
	}
});

document.addEventListener("DOMContentLoaded", () => {
	for (let i = 0; i < poppableElements.length; i++) {
		poppableElements[i].addEventListener("click", e => {
			popElement(e.target);
		});
	}

	for (let i = 0; i < dates.length; i++) {
		formateDate(dates[i]);
	}

	const skillIcons = document.querySelectorAll(".skill-detail");
	let skillItems = [];

	for (let i = 0; i < skillIcons.length; i++) {
		skillItems[i] = skillIcons[i].parentElement;
	}

	for (let i = 0; i < skillItems.length; i++) {
		skillItems[i].addEventListener("mouseover", () => {
			skillItems[i].children[1].classList.add("skill-detail-active");
		});

		skillItems[i].addEventListener("mouseout", () => {
			skillItems[i].children[1].classList.remove("skill-detail-active");
		});
	}

	animateText(document.querySelector(".nav-title-content"), "Jacob Seiler");
});
