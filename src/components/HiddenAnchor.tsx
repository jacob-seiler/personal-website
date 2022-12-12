interface HiddenAnchorProps {
    to: string
}

export default function HiddenAnchor({ to }: HiddenAnchorProps) {
    const handleClick = () => {
        const element = document.getElementById(to);

        if (element == null)
            return;

        element.scrollIntoView({ behavior: "smooth" });
        element.focus({ preventScroll: true });
        element.blur();
    }

    return (
        <button
            onClick={handleClick}
            className="fixed top-0 px-6 py-4 -translate-x-2/4 -translate-y-52 transition-transform motion-reduce:transition-none focus:translate-y-5 bg-primary text-white shadow-light font-bold text-lg tiny:text-base z-50"
        >
            Skip to {to}
        </button>
    )
}