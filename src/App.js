import { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const options = [
    {
        label: "The color red",
        value: 'red'
    },
    {
        label: "The color green",
        value: 'green'
    },
    {
        label: "The color blue",
        value: 'blue'
    }
];
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
];
export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown
                
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />

        </div>
    );
}