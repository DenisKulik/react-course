import { useState } from 'react';

export default {
    title: 'Example/UseState'
};

const generateData = () => 1;

export const ExampleOne = () => {
    const [ count, setCount ] = useState(generateData);

    const changer = (state: number) => state + 1;

    return (
        <>
            <button onClick={() => setCount(changer)}>+</button>
            {count}
        </>
    );
};