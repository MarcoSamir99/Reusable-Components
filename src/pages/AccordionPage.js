import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'zaza22',
            label: 'can i use react on projects',   
            content: 'NO'
        },
        {
            id: 'zaza21',
            label: 'can i use JS on projects',   
            content: 'always'
        },
        {   
            id:'zaza20',
            label: 'can i use CSS on projects',   
            content: 'maybe'
        },
        
    ]


    return <Accordion items={items} />;
}

export default AccordionPage;