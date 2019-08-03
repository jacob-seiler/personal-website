const poppableElements = document.querySelectorAll(".poppable");
const profilePicAmount = 2;
let profilePicIndex = 0;

function nextProfilePic(e) {
	profilePicIndex += 1;

	if (profilePicIndex >= profilePicAmount) {
		profilePicIndex = 0;
	}

	e.src = "assets/profile-" + profilePicIndex + ".png";
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
