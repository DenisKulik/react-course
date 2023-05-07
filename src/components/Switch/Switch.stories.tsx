import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Switch from './Switch';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Switch> = {
    title: 'Switch',
    component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

const SwitchWithHook = () => {
    const [ switchStatus, setSwitchStatus ] = useState(false);
    return <Switch status={switchStatus} setStatus={setSwitchStatus} />;
};

export const UncontrolledSwitch: Story = {
    args: {
        status: false,
        setStatus: action('clicked')
    },
};

export const ControlledSwitch: Story = {
    render: () => <SwitchWithHook />
};
