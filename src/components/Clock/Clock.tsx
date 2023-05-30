import { useEffect, useState } from 'react';

const Clock = () => {
    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const stringTime = `${hours}:${minutes}:${seconds}`;

    return (
        <div>
            {stringTime}
        </div>
    );
};

export default Clock;