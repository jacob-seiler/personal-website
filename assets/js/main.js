const experienceWork = document.querySelector(".experience-work");
const experienceOther = document.querySelector(".experience-other");

function loadJSON(path, callback) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open("GET", path, true);

	xobj.onreadystatechange = function() {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(JSON.parse(xobj.responseText));
		}
	};

	xobj.send(null);
}

function loadExperiences() {
	loadJSON("assets/js/experience.json", function(json) {
		// Load work experience data
		for (let i = 0; i < json.work.length; i++) {
			let card = createExperienceCard(json.work[i]);
			experienceWork.appendChild(card);
		}

		// Load other experience data
		for (let i = 0; i < json.other.length; i++) {
			let card = createExperienceCard(json.other[i]);
			experienceOther.appendChild(card);
		}
	});
}

function createExperienceCard(data) {
	let card = document.createElement("DIV");
	card.classList.add("experience-card");

	if (data.img !== undefined) {
		let img = document.createElement("IMG");
		img.classList.add("experience=card-img");
		img.setAttribute("src", "assets/images/" + data.img);

		if (data.org !== undefined) {
			img.setAttribute("alt", data.org + " Logo");
		} else {
			img.setAttribute("alt", "Company Logo");
		}

		card.appendChild(img);
	}

	if (data.title !== undefined) {
		let title = document.createElement("H1");
		title.classList.add("experience=card-title");
		title.textContent = data.title;
		card.appendChild(title);
	}

	if (data.org !== undefined) {
		let org = document.createElement("H2");
		org.classList.add("experience=card-org");
		org.textContent = data.org;
		card.appendChild(org);
	}

	if (data.date !== undefined) {
		let date = document.createElement("H3");
		date.classList.add("experience=card-date");
		date.textContent = data.date;
		card.appendChild(date);
	}

	if (data.loc !== undefined) {
		let loc = document.createElement("P");
		loc.classList.add("experience=card-loc");
		loc.textContent = data.loc;
		card.appendChild(loc);
	}

	if (data.desc !== undefined) {
		let desc = document.createElement("P");
		desc.classList.add("experience=card-desc");
		desc.textContent = data.desc;
		card.appendChild(desc);
	}

	return card;
}

document.addEventListener("DOMContentLoaded", () => {
	loadExperiences();
});
