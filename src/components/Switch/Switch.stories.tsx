import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import Switch from './Switch';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Switch> = {
    title: 'Switch',
    component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

const SwitchWithHook = ({ status }: { status: boolean }) => {
    const [ switchStatus, setSwitchStatus ] = useState(status);
    useEffect(() => setSwitchStatus(status), [ status ]);
    return <Switch status={switchStatus} setStatus={setSwitchStatus} />;
};

export const UncontrolledSwitch: Story = {
    args: {
        status: false,
        setStatus: action('clicked')
    },
};

export const ControlledSwitch: Story = {
    render: (args) => <SwitchWithHook status={args.status} />,
    args: {
        status: true,
    }
};
