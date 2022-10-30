import Accordion from "./components/Accordion";
import Search from "./components/Search";

export default () => {
    const items = [
        {
            title: "What is React?",
            content: "React is a font end javascript library"
        },
        {
            title: "What is React1?",
            content: "React is a font end javascript library"
        },
        {
            title: "What is React2?",
            content: "React is a font end javascript library"
        }
    ]
    return (
        <div>

            <Search />
        </div>
    );
}