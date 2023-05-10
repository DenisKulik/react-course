import { KeyboardEvent, useEffect, useReducer } from 'react';
import styles from './Select.module.scss';
import reducer, { CHANGE_HOVERED_ITEM, TOGGLE_ACTIVE } from './reducer';

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
    const [ state, dispatch ] = useReducer(reducer,
        { active: false, hoveredItemValue: value });

    useEffect(() => {
        dispatch({ type: CHANGE_HOVERED_ITEM, nextValue: value });
    }, [ value ]);

    const toggleItemsHandler = () => dispatch({ type: TOGGLE_ACTIVE });
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape' || e.key === 'Enter') {
            dispatch({ type: TOGGLE_ACTIVE });
            return;
        }

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            if (!state.hoveredItemValue) {
                e.key === 'ArrowDown' ? onChangeValue(items[0].value) :
                onChangeValue(items[items.length - 1].value);
                return;
            }

            for (let i = 0; i < items.length; i += 1) {
                if (state.hoveredItemValue === items[i].value) {
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
                state.hoveredItemValue === item.value ? styles.selected : ''}`}
            onMouseEnter={() => dispatch(
                { type: CHANGE_HOVERED_ITEM, nextValue: item.value })}
            onClick={() => onClickItemHandler(item.value)}>
            {item.title}
        </div>));

    return (
        <div className={styles.select}
             tabIndex={0}
             onKeyUp={onKeyUpHandler}>
            <span onClick={toggleItemsHandler}>{selectedItem?.title}</span>
            {state.active && (
                <div className={styles.items}>
                    {itemsList}
                </div>
            )}
        </div>
    );
};

export default Select;