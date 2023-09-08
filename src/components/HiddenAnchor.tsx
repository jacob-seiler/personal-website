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
      className="fixed top-0 z-50 -translate-x-2/4 -translate-y-52 bg-primary px-6 py-4 text-lg font-bold text-white shadow-light transition-transform focus:translate-y-5 motion-reduce:transition-none tiny:text-base"
    >
      Skip to {to}
    </button>
  );
}
