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
    // localState

    const itemsList = items.map(item => <div>{item.title}</div>);

    return (
        <div>
            <div onClick={onChange}>{value}</div>
            {/*if clicked - unwrap*/}
            {itemsList}
        </div>
    );
};

export default Select;