import styles from './Accordion.module.scss';
import { useState } from 'react';

type AccordionPropsType = {
    title: string,
}

export default function Accordion({ title }: AccordionPropsType) {
    const [ collapsed, setCollapsed ] = useState(true);

    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <div className={ styles.accordion }>
            <AccordionTitle title={ title } />
            <button onClick={ toggleCollapse } className={ styles.btn }>
                Toggle
            </button>
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