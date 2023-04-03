type AccordionPropsType = {
    title: string,
    collapsed?: boolean,
}

export default function Accordion({ title, collapsed }: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={ title } />
            { collapsed && <AccordionBody /> }
        </div>
    );
}

function AccordionTitle({ title }: { title: string }) {
    return (
        <h3>{ title }</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}