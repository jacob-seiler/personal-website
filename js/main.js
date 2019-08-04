const navButton = document.querySelector(".nav-button");
const navContent = document.querySelector(".nav-content");

const scrollStops = document.querySelectorAll(".scrollstop");

const poppableElements = document.querySelectorAll(".poppable");

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
});
