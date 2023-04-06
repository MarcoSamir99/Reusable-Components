import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({items}) { 
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {  //we made this outside mapping func to make map fanction easier to read
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1)
        } else{
            setExpandedIndex(nextIndex);
        }
    };
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex; //index === expanded index is boolean , it acts like a question and is expanded returns true or false values
        const icon = (
        <span className="text-xl"> {isExpanded ? <GoChevronDown /> : <GoChevronLeft /> } </span>
        );

        const content = isExpanded && <div className="border-b p-5">{item.content}</div>;  //&& makes me take the first false value or the last true one and js by its nature dont print false, true null and undefined values

        return (
            <div key={item.id }>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {content}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion;