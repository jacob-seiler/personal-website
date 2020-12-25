let copyText = "";

const toggleMail = () => {
	$("#collapseMail").collapse("toggle");
	$("#collapsePhone").collapse("hide");

	copyText = "seiler.jacob1@gmail.com";
};

const togglePhone = () => {
	$("#collapsePhone").collapse("toggle");
	$("#collapseMail").collapse("hide");

	copyText = "+14165577215";
};

const copy = () => {
	if (navigator.clipboard) {
		navigator.clipboard.writeText(copyText);
		return;
	}

	const textArea = document.createElement("textarea");
	textArea.value = copyText;

	// Avoid scrolling to bottom
	textArea.style.top = "0";
	textArea.style.left = "0";
	textArea.style.position = "fixed";

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	document.execCommand("copy");

	document.body.removeChild(textArea);
};
