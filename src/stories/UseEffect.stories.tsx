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