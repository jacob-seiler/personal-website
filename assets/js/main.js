let navbarContent = document.querySelector(".nav-content");
let navbarButton = document.querySelector(".nav-button");
let navbarEnvelope = document.querySelector(".nav-envelope");

navbarButton.addEventListener("click", function() {
	navbarContent.classList.toggle("nav-active");
});

navbarEnvelope.addEventListener("mouseover", function() {
	navbarEnvelope.children[0].classList.remove("fa-envelope");
	navbarEnvelope.children[0].classList.add("fa-envelope-open");
});

navbarEnvelope.addEventListener("mouseout", function() {
	navbarEnvelope.children[0].classList.remove("fa-envelope-open");
	navbarEnvelope.children[0].classList.add("fa-envelope");
});
