export default function TopButton() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById("top")?.focus()
    }

    return <button onClick={handleClick} class="font-bold underline text-primary">Back to top</button>
}