import { KeyboardEvent, useEffect, useState } from 'react';
import styles from './Select.module.scss';

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    items: ItemType[]
    onChangeValue: (value: any) => void
}

const Select = (props: SelectPropsType) => {
    const { value, items, onChangeValue } = props;
    const [ active, setActive ] = useState<boolean>(false);
    const [ hoveredItemValue, setHoveredItemValue ] = useState(value);

    useEffect(() => setHoveredItemValue(value), [ value ]);

    const toggleItemsHandler = () => setActive(!active);
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape' || e.key === 'Enter') {
            setActive(false);
            return;
        }

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            if (!hoveredItemValue) {
                e.key === 'ArrowDown' ? onChangeValue(items[0].value) :
                onChangeValue(items[items.length - 1].value);
                return;
            }

            for (let i = 0; i < items.length; i += 1) {
                if (hoveredItemValue === items[i].value) {
                    e.key === 'ArrowDown' ?
                    items[i + 1] && onChangeValue(items[i + 1].value) :
                    items[i - 1] && onChangeValue(items[i - 1].value);
                    return;
                }
            }
        }
    };
    const onClickItemHandler = (value: any) => {
        onChangeValue(value);
        toggleItemsHandler();
    };

    const selectedItem = items.find(item => item.value === value);

    const itemsList = items.map((item, idx) => (
        <div
            key={idx}
            className={`${styles.item} ${
                hoveredItemValue === item.value ? styles.selected : ''}`}
            onMouseEnter={() => setHoveredItemValue(item.value)}
            onClick={() => onClickItemHandler(item.value)}>
            {item.title}
        </div>));

    return (
        <div className={styles.select}
             tabIndex={0}
             onKeyUp={onKeyUpHandler}>
            <span onClick={toggleItemsHandler}>{selectedItem?.title}</span>
            {active && (
                <div className={styles.items}>
                    {itemsList}
                </div>
            )}
        </div>
    );
};

export default Select;