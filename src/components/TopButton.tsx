export default function TopButton() {
    const handleClick = () => {
        const element = document.getElementById("top");

        if (element == null)
            return;

        element.scrollIntoView({ behavior: "smooth" });
        element.focus({ preventScroll: true });
        element.blur();
    }

    return (
        <button
            onClick={handleClick}
            class="font-bold underline dark:text-white hover:text-primary dark:hover:text-primary"
        >
            Back to top
        </button>
    )
}