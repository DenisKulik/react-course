import { useState } from 'react';
import styles from './Accordion.module.scss';

type AccordionPropsType = {
    title: string,
}

export default function Accordion({ title }: AccordionPropsType) {
    const [ collapsed, setCollapsed ] = useState(true);

    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <div className={ styles.accordion }>
            <AccordionTitle title={ title } toggleCollapse={ toggleCollapse } />
            { collapsed && <AccordionBody /> }
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    toggleCollapse: () => void
}

function AccordionTitle({ title, toggleCollapse }: AccordionTitlePropsType) {
    return (
        <h3 className={ styles.title } onClick={ toggleCollapse }>{ title }</h3>
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