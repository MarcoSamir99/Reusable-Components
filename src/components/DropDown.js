import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import Panel from "./panel";


function DropDown ({ options, selection, onSelect }) {     

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
             if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
             }
        };

        document.addEventListener('click', handler, true );

        return () => {
            document.removeEventListener('click', handler, true);
        }
    }, []);




    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelect(option);
    }

    const renderedOptions = options.map((option) => {
     return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label} </div>;
     });


    return <div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer " onClick={handleClick}>
            {selection?.label || 'Select...'}
            <span className="text-xl">{isOpen ? <GoChevronUp /> : <GoChevronDown /> } </span>
            </Panel>
        {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
}

export default DropDown;