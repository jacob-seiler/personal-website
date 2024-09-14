const sun = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
        <path d="M22.088 13.126l1.912-1.126-1.912-1.126c-1.021-.602-1.372-1.91-.788-2.942l1.093-1.932-2.22-.02c-1.185-.01-2.143-.968-2.153-2.153l-.02-2.219-1.932 1.093c-1.031.583-2.34.233-2.941-.788l-1.127-1.913-1.127 1.913c-.602 1.021-1.91 1.372-2.941.788l-1.932-1.093-.02 2.219c-.01 1.185-.968 2.143-2.153 2.153l-2.22.02 1.093 1.932c.584 1.032.233 2.34-.788 2.942l-1.912 1.126 1.912 1.126c1.021.602 1.372 1.91.788 2.942l-1.093 1.932 2.22.02c1.185.01 2.143.968 2.153 2.153l.02 2.219 1.932-1.093c1.031-.583 2.34-.233 2.941.788l1.127 1.913 1.127-1.913c.602-1.021 1.91-1.372 2.941-.788l1.932 1.093.02-2.219c.011-1.185.969-2.143 2.153-2.153l2.22-.02-1.093-1.932c-.584-1.031-.234-2.34.788-2.942zm-10.117 6.874c-4.411 0-8-3.589-8-8s3.588-8 8-8 8 3.589 8 8-3.589 8-8 8zm6.029-8c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6z" />
    </svg>
);

const moon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
        <path d="M12 0c-1.109 0-2.178.162-3.197.444 3.826 5.933-2.026 13.496-8.781 11.128l-.022.428c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12z" />
    </svg>
);

import { useEffect, useState } from "preact/hooks";

export default function ThemeButton() {
    const [isDark, setIsDark] = useState<boolean>(
        (JSON.parse(localStorage.getItem("darkMode")) as boolean | null) ??
            (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );

    const addTransition = () => {
        const el = document.body;

        if (!el.classList.contains("transition-colors"))
            setTimeout(() => el.classList.add("transition-colors"), 100);
    };

    const handleSystemChange = (e: MediaQueryListEvent) => {
        addTransition();
        setIsDark(e.matches);
    };

    // Update color theme when state is updated
    useEffect(() => {
        const el = document.body.parentElement;

        if (isDark) el.classList.add("dark");
        else el.classList.remove("dark");

        localStorage.setItem("darkMode", JSON.stringify(isDark));

        addTransition();
    }, [isDark]);

    // Change color theme when system color scheme changes
    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", handleSystemChange);

        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", handleSystemChange);
        };
    }, [window]);

    return (
        <button
            onClick={() => setIsDark(prevIsDark => !prevIsDark)}
            class={`${
                isDark ? "fill-white" : "fill-black"
            } absolute right-8 top-6 h-6 w-6 transition-transform hover:scale-125 motion-reduce:transition-none tiny:right-6 tiny:top-5`}
            aria-label="Toggle color theme"
        >
            {isDark ? sun : moon}
        </button>
    );
}
