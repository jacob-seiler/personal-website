const poppableElements = document.querySelectorAll(".poppable");

function randomizeProfile(e) {
	// TODO get random profile pic from assets folder

	e.src = "assets/profile-1.png";
}

function popElement(e) {
	e.classList.add("pop");
	e.addEventListener("animationend", function() {
		e.classList.remove("pop");
	});
}

document.addEventListener("DOMContentLoaded", () => {
	for (let i = 0; i < poppableElements.length; i++) {
		poppableElements[i].addEventListener("click", e => {
			popElement(e.target);
		});
	}
});
