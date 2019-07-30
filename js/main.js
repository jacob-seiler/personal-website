const navContent = document.querySelector(".nav-content");
const navButton = document.querySelector(".nav-collapse");

const skillsCover = document.querySelector(".skills-cover");
const skillsLogos = document.querySelector(".skills-logos");

const skillsInfoCompany = document.querySelector(".company");
const skillsInfoDate = document.querySelector(".date");
const skillsInfoTitle = document.querySelector(".title");
const skillsInfoDescription = document.querySelector(".desc");

function toggleNavbar() {
	navButton.classList.toggle("nav-active");
	navContent.classList.toggle("nav-active");
}

function toggleSkillsInfo(e, ref) {
	if (skillsCover.classList.contains("skills-cover-active")) {
		for (let i = 0; i < skillsLogos.children.length; i++) {
			skillsLogos.children[i].children[0].classList.remove("skill-logo-active");
		}

		skillsCover.classList.remove("skills-cover-active");
	} else {
		// Write to DOM info from JSON
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				const response = JSON.parse(xhttp.responseText)[ref];

				skillsInfoCompany.textContent = response["company"];
				skillsInfoDate.textContent = response["date"];
				skillsInfoTitle.textContent = response["title"];
				skillsInfoDescription.textContent = response["desc"];
			}
		};
		xhttp.open("GET", "js/experience.json", true);
		xhttp.send();

		skillsCover.classList.add("skills-cover-active");
		e.classList.add("skill-logo-active");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// Toggle context menu
	navButton.addEventListener("click", () => {
		toggleNavbar();
	});
});
