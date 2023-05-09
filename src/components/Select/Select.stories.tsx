import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import Select, { SelectPropsType } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

const SelectWithHooks = (args: SelectPropsType) => {
    const [ value, setValue ] = useState(args.value);
    useEffect(() => setValue(args.value), [ args.value ]);

    return (
        <Select
            value={value}
            items={args.items}
            onChangeValue={setValue} />
    );
};

export const SelectWithoutValue: Story = {
    render: (args) => <SelectWithHooks {...args} />,
    args: {
        value: null,
        items: [
            { value: '1', title: 'Moscow' },
            { value: '2', title: 'Kemerovo' },
            { value: '3', title: 'Sochi' }
        ],
    }
};

export const SelectWithValue: Story = {
    render: (args) => <SelectWithHooks {...args} />,
    args: {
        value: '2',
        items: [
            { value: '1', title: 'Moscow' },
            { value: '2', title: 'Kemerovo' },
            { value: '3', title: 'Sochi' }
        ],
    }
};
