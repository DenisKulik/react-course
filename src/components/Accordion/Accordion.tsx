import styles from './Accordion.module.scss';

type AccordionPropsType = {
    title: string
    /**
     * Optional color of header text
     */
    color?: string
    accordionCollapsed: boolean
    toggleCollapse: () => void
}

export default function Accordion(props: AccordionPropsType) {
    const { title, accordionCollapsed, toggleCollapse, ...otherProps } = props;

    return (
        <div className={styles.accordion}>
            <AccordionTitle
                title={title}
                toggleCollapse={toggleCollapse}
                {...otherProps}
            />
            {!accordionCollapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    color?: string
    toggleCollapse: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const { title, toggleCollapse, ...otherProps } = props;

    return (
        <h3
            className={styles.title}
            style={{ color: otherProps.color ? otherProps.color : 'black' }}
            onClick={toggleCollapse}>{title}
        </h3>
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