export default function TopButton() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <button onClick={handleClick} class="font-bold underline text-primary">Back to top</button>
}