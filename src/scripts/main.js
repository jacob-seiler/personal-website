"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/main.scss");
const jquery_1 = __importDefault(require("jquery"));
require("bootstrap");
var bootstrap_enabled = (typeof (0, jquery_1.default)().modal == 'function');
var jquery_disabled = typeof jQuery == 'undefined';
console.log(bootstrap_enabled, !jquery_disabled);
let copyVal = "";
(0, jquery_1.default)(document).on("click", (e) => {
    if (!(0, jquery_1.default)(e.target).is(".collapse-element") &&
        (0, jquery_1.default)(e.target).parents(".collapse-element").length === 0) {
        (0, jquery_1.default)("#collapse").collapse("hide");
    }
});
const isCollapsed = () => {
    return !(0, jquery_1.default)("#collapse").hasClass("show");
};
const show = (displayText, copyText, open) => {
    copyVal = copyText;
    (0, jquery_1.default)("#collapse-text").text(displayText);
    (0, jquery_1.default)("#openButton").attr("href", open);
    (0, jquery_1.default)("#collapse").collapse("show");
};
const toggle = (displayText, copyText, open) => {
    if (isCollapsed())
        show(displayText, copyText, open);
    else {
        (0, jquery_1.default)("#collapse")
            .collapse("hide")
            .on("hidden.bs.collapse", () => {
            (0, jquery_1.default)("#collapse").off();
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
    let displayText = "+1 (416) " + String.fromCharCode(53) + "57-7215";
    let copyText = "+1416" + String.fromCharCode(53) + "577215";
    let open = "tel:+1416" + String.fromCharCode(53) + "577215";
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
    if ((0, jquery_1.default)(".headshot").hasClass("spin"))
        return;
    (0, jquery_1.default)(".headshot").addClass("spin");
    (0, jquery_1.default)(".headshot").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        (0, jquery_1.default)(".headshot").removeClass("spin");
    });
    swapTheme();
};
(0, jquery_1.default)(() => {
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
// Listen for button presses
const spinButton = document.getElementById("spin-button");
const toggleMailButton = document.getElementById("toggle-mail-button");
const togglePhoneButton = document.getElementById("toggle-phone-button");
const copyButton = document.getElementById("copy-button");
if (spinButton !== null)
    spinButton.addEventListener("click", spin);
if (toggleMailButton !== null)
    toggleMailButton.addEventListener("click", toggleMail);
if (togglePhoneButton !== null)
    togglePhoneButton.addEventListener("click", togglePhone);
if (copyButton !== null)
    copyButton.addEventListener("click", copy);
