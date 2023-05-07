import type { Meta, StoryObj } from '@storybook/react';
import Rating, { RatingValueType } from './Rating';
import { useState } from 'react';

const meta: Meta<typeof Rating> = {
    title: 'Rating',
    component: Rating,
};
export default meta;

type Story = StoryObj<typeof Rating>;

const RatingWithHook = () => {
    const [ ratingValue, setRatingValue ] = useState<RatingValueType>(0);
    return <Rating ratingValue={ratingValue} setRatingValue={setRatingValue} />;
};

export const UncontrolledRating: Story = {
    args: {
        ratingValue: 0,
        setRatingValue: x => x
    },
};

export const ControlledRating: Story = {
    render: () => <RatingWithHook />
};
