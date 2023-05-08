import type { Meta, StoryObj } from '@storybook/react';
import Rating, { RatingValueType } from './Rating';
import { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Rating> = {
    title: 'Rating',
    component: Rating,
};
export default meta;

type Story = StoryObj<typeof Rating>;

const RatingWithHook = ({ ratingValue }: { ratingValue: RatingValueType }) => {
    const [ value, setValue ] = useState<RatingValueType>(ratingValue);

    useEffect(() => {
        setValue(ratingValue);
    }, [ ratingValue ]);

    return <Rating ratingValue={value} setRatingValue={setValue} />;
};

export const UncontrolledRating: Story = {
    args: {
        ratingValue: 0,
        setRatingValue: action('clicked')
    },
};

export const ControlledRating: Story = {
    render: (args) => <RatingWithHook ratingValue={args.ratingValue} />,
    args: {
        ratingValue: 0,
    },
};
