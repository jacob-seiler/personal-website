let copyVal = "";

$(document).bind("click", (e) => {
	if (
		!$(e.target).is(".collapse-element") &&
		$(e.target).parents(".collapse-element").length === 0
	) {
		$("#collapse").collapse("hide");
	}
});

const isCollapsed = () => {
	return !$("#collapse").hasClass("show");
};

const show = (displayText, copyText, open) => {
	copyVal = copyText;

	$("#collapse-text").text(displayText);
	$("#openButton").attr("href", open);
	$("#collapse").collapse("show");
};

const toggle = (displayText, copyText, open) => {
	if (isCollapsed()) show(displayText, copyText, open);
	else {
		$("#collapse")
			.collapse("hide")
			.on("hidden.bs.collapse", () => {
				$("#collapse").off();
				if (copyText !== copyVal) show(displayText, copyText, open);
			});
	}
};

const toggleMail = () => {
	let displayText = "seiler.jacob1@gmail.com";
	let copyText = "seiler.jacob1@gmail.com";
	let open = "mailto:seiler.jacob1@gmail.com";

	toggle(displayText, copyText, open);
};

const togglePhone = () => {
	let displayText = "+1 (416) 557-7215";
	let copyText = "+14165577215";
	let open = "tel:+14165577215";

	toggle(displayText, copyText, open);
};

const copy = () => {
	if (navigator.clipboard) {
		navigator.clipboard.writeText(copyVal);
		return;
	}

	const textArea = document.createElement("textarea");
	textArea.value = copyVal;

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
