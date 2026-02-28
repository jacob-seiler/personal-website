interface HiddenAnchorProps {
    to: string;
}

export default function HiddenAnchor({ to }: HiddenAnchorProps) {
    const handleClick = () => {
        const element = document.getElementById(to);

        if (element == null) return;

        element.scrollIntoView({ behavior: "smooth" });
        element.focus({ preventScroll: true });
        element.blur();
    };

    return (
        <button
            onClick={handleClick}
            className="bg-primary shadow-light tiny:text-base fixed top-0 z-50 -translate-x-2/4 -translate-y-52 px-6 py-4 text-lg font-bold text-white transition-transform focus:translate-y-5 motion-reduce:transition-none"
        >
            Skip to {to}
        </button>
    );
}
