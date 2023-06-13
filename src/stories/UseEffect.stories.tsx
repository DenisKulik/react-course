import { useEffect, useState } from 'react';

export default {
    title: 'Example/UseEffect'
};


export const ExampleOne = () => {
    const [ count, setCount ] = useState(1);

    useEffect(() => {
        // api.getUsers().then('')
        // setInterval
        // indexDB
        // document.getElementByID
        // document.title = 'User'

        document.title = count.toString();
    }, [ count ]);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
        </>
    );
};

export const SetTimeoutExample = () => {
    const [ count, setCount ] = useState(1);

    useEffect(() => {
        setTimeout(() => document.title = count.toString(), 1000);
    }, [ count ]);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
        </>
    );
};

export const SetIntervalExample = () => {
    const [ count, setCount ] = useState(1);

    useEffect(() => {
        setInterval(() => setCount((state) => state + 1), 1000);
    }, []);

    return (
        <>
            {count}
        </>
    );
};

export const ResetEffectExample = () => {
    const [ count, setCount ] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => setCount((state) => state + 1),
            1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {count}
        </>
    );
};