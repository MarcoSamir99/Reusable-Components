import { useState } from "react";
import DropDown from "../components/DropDown";

function DropDownPaage() {
    const [selection, setSelection] = useState(null);

    const handleSelection = (option) => {
        setSelection(option)
    }

    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'},
    ]

   return <div className="flex">
    <DropDown selection={selection} onSelect={handleSelection} options={options} />
    <DropDown selection={selection} onSelect={handleSelection} options={options} />
    </div>
}

export default DropDownPaage;