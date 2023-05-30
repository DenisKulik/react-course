import { Meta, StoryObj } from '@storybook/react';
import Clock from './Clock';

const meta: Meta<typeof Clock> = {
    title: 'Components/Clock',
    component: Clock,
};
export default meta;

type Story = StoryObj<typeof Clock>;

export const SimpleClock: Story = {};