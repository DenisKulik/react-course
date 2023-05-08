import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;

const AccordionWithHook = ({ title, accordionCollapsed }: {
    title: string, accordionCollapsed: boolean
}) => {
    const [ collapsed, setCollapsed ] = useState(accordionCollapsed);
    useEffect(() => setCollapsed(accordionCollapsed), [ accordionCollapsed ]);
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
    render: (args) => <AccordionWithHook {...args} />,
    args: {
        title: 'Technologies',
        accordionCollapsed: false,
    },
};
