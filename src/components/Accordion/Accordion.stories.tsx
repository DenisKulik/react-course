import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;

const AccordionWithHook = ({ title }: {
    title: string,
}) => {
    const [ collapsed, setCollapsed ] = useState(false);
    const toggleCollapse = () => setCollapsed(!collapsed);
    return <Accordion
        title={title}
        accordionCollapsed={collapsed}
        toggleCollapse={toggleCollapse}
    />;
};

export const UncontrolledAccordion: Story = {
    args: {
        title: 'Technologies',
        accordionCollapsed: true,
        toggleCollapse: action('accordion mode change event fired')
    },
};

export const ControlledAccordion: Story = {
    render: (args) => <AccordionWithHook title={args.title} />,
    args: {
        title: 'Technologies',
    },
};
