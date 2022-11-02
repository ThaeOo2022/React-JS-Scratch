import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

export default () => {
    const options=[
        {
            label:"The color red",
            value:'red'
        },
        {
            label:"The color green",
            value:'green'
        },
        {
            label:"The color blue",
            value:'blue'
        }
    ]
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
            <Dropdown options={options}/>
          
        </div>
    );
}