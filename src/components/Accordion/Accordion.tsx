import styles from './Accordion.module.scss';

type AccordionPropsType = {
    title: string
    accordionCollapsed: boolean
    toggleCollapse: () => void
}

export default function Accordion(props: AccordionPropsType) {
    const { title, accordionCollapsed, toggleCollapse } = props;

    return (
        <div className={styles.accordion}>
            <AccordionTitle title={title} toggleCollapse={toggleCollapse} />
            {!accordionCollapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    toggleCollapse: () => void
}

function AccordionTitle({ title, toggleCollapse }: AccordionTitlePropsType) {
    return (
        <h3 className={styles.title} onClick={toggleCollapse}>{title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Angular</li>
            <li>Bootstrap</li>
            <li>SASS</li>
            <li>Webpack</li>
            <li>Babel</li>
        </ul>
    );
}