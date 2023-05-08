import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import Accordion, { AccordionPropsType } from './Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color'
        }
    },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

const onClickCallback = action('some item was clicked');

const AccordionWithHook = (args: AccordionPropsType) => {
    const { accordionCollapsed } = args;
    const [ collapsed, setCollapsed ] = useState(accordionCollapsed);
    useEffect(() => setCollapsed(accordionCollapsed), [ accordionCollapsed ]);
    const toggleCollapse = () => setCollapsed(!collapsed);
    return (
        <Accordion
            {...args}
            accordionCollapsed={collapsed}
            toggleCollapse={toggleCollapse}
        />
    );
};

export const UncontrolledAccordion: Story = {
    args: {
        title: 'Technologies',
        items: [
            { title: 'HTML', value: 1 },
            { title: 'CSS', value: 2 },
            { title: 'JavaScript', value: 3 },
            { title: 'React', value: 4 },
            { title: 'Angular', value: 5 },
        ],
        accordionCollapsed: true,
        toggleCollapse: action('accordion mode change event fired'),
        onClick: onClickCallback,
    },
};

export const ControlledAccordion: Story = {
    render: (args) => <AccordionWithHook {...args} />,
    args: {
        title: 'Technologies',
        items: [
            { title: 'HTML', value: 1 },
            { title: 'CSS', value: 2 },
            { title: 'JavaScript', value: 3 },
            { title: 'React', value: 4 },
            { title: 'Angular', value: 5 },
        ],
        accordionCollapsed: false,
        onClick: onClickCallback,
    },
};
