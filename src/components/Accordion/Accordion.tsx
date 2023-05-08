import styles from './Accordion.module.scss';

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    /**
     * Optional color of header text
     */
    color?: string
    accordionCollapsed: boolean
    toggleCollapse: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

const Accordion = (props: AccordionPropsType) => {
    const {
        title,
        items,
        onClick,
        accordionCollapsed,
        toggleCollapse,
        ...otherProps
    } = props;

    return (
        <div className={styles.accordion}>
            <AccordionTitle
                title={title}
                toggleCollapse={toggleCollapse}
                {...otherProps}
            />
            {!accordionCollapsed &&
                <AccordionBody items={items} onClick={onClick} />}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    color?: string
    toggleCollapse: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    const { title, toggleCollapse, ...otherProps } = props;

    return (
        <h3
            className={styles.title}
            style={{ color: otherProps.color ? otherProps.color : 'black' }}
            onClick={toggleCollapse}>{title}
        </h3>
    );
};

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    const { items, onClick } = props;
    const itemsList = items.map((item, idx) => (
        <li key={idx} onClick={() => onClick(item.value)}>{item.title}</li>
    ));

    return (
        <ul>{itemsList} </ul>
    );
};

export default Accordion;