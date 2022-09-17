"use strict";
var _a, _b, _c, _d;
/* eslint-env jquery */
let copyVal = "";
$(document).bind("click", (e) => {
    if (!$(e.target).is(".collapse-element") &&
        $(e.target).parents(".collapse-element").length === 0) {
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
    if (isCollapsed())
        show(displayText, copyText, open);
    else {
        $("#collapse")
            .collapse("hide")
            .on("hidden.bs.collapse", () => {
            $("#collapse").off();
            if (copyText !== copyVal)
                show(displayText, copyText, open);
        });
    }
};
const toggleMail = () => {
    const displayText = "seiler.jac" + String.fromCharCode(111) + "b1@gmail.com";
    const copyText = "seiler.jac" + String.fromCharCode(111) + "b1@gmail.com";
    const open = "mailto:seiler.jac" + String.fromCharCode(111) + "b1@gmail.com";
    toggle(displayText, copyText, open);
};
const togglePhone = () => {
    const displayText = "+1 (416) " + String.fromCharCode(53) + "57-7215";
    const copyText = "+1416" + String.fromCharCode(53) + "577215";
    const open = "tel:+1416" + String.fromCharCode(53) + "577215";
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
const setTheme = (value, transition) => {
    if (document.documentElement.getAttribute("data-theme") === value)
        return;
    document.documentElement.setAttribute("data-theme", value);
    if (!transition)
        return;
    document.documentElement.classList.add("color-transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("color-transition");
    }, 1000);
};
const swapTheme = () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    setTheme(newTheme, true);
};
const spin = () => {
    if ($(".headshot").hasClass("spin"))
        return;
    $(".headshot").addClass("spin");
    $(".headshot").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $(".headshot").removeClass("spin");
    });
    swapTheme();
};
$(document).ready(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme, true);
    });
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark", false);
    }
    else {
        setTheme("light", false);
    }
});
// Let the document know when the mouse is being used
document.body.addEventListener("mousedown", function () {
    document.body.classList.remove("using-tab");
});
// Re-enable focus styling when Tab is pressed
document.body.addEventListener("keydown", function (event) {
    if (event.key === "Tab" || event.key === "Enter") {
        document.body.classList.add("using-tab");
    }
});
// Assign action to buttons
(_a = document.getElementById("button-spin")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", spin);
(_b = document.getElementById("button-mail")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", toggleMail);
(_c = document.getElementById("button-phone")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", togglePhone);
(_d = document.getElementById("button-copy")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", copy);
