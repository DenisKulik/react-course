import styles from './Accordion.module.scss';

type AccordionPropsType = {
    title: string
    accordionCollapsed: boolean
    toggleCollapse: () => void
}

export default function Accordion(props: AccordionPropsType) {
    const { title, accordionCollapsed, toggleCollapse } = props;

    return (
        <div className={ styles.accordion }>
            <AccordionTitle title={ title } toggleCollapse={ toggleCollapse } />
            { !accordionCollapsed && <AccordionBody /> }
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