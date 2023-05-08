import { useState } from 'react';

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    items: ItemType[]
    onChange: (value: any) => void
}

const Select = (props: SelectPropsType) => {
    const { value, items, onChange } = props;
    const [ opened, setOpened ] = useState<boolean>(false);

    const onOpenedHandler = () => setOpened(true);
    const changeValueHandler = (value: any) => {
        onChange(value);
        setOpened(false);
    };

    const itemsList = items.map((item, idx) => (
        <div key={idx} onClick={() => changeValueHandler(item.value)}>
            {item.title}
        </div>));

    return (
        <div>
            <div onClick={onOpenedHandler}>{value}</div>
            {opened && itemsList}
        </div>
    );
};

export default Select;