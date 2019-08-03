const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let codePosition = 0;

document.addEventListener("keydown", e => {
	if (e.keyCode === code[codePosition]) {
		codePosition++;

		if (codePosition >= code.length) {
			activateCheats();
			codePosition = 0;
		}
	} else {
		codePosition = 0;
	}
});

function activateCheats() {
	// TODO do something wonky
	// Maybe pong on the screen?
	// Maybe a color picker?
	// Maybe interactable beach ball?

	alert("Congrats, you know the konami code. Ya nerd. :P");
}
