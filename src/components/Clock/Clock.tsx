import { useEffect, useState } from 'react';

const Clock = () => {
    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);

    const getTwoDigitsString = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    const hours = getTwoDigitsString(date.getHours());
    const minutes = getTwoDigitsString(date.getMinutes());
    const seconds = getTwoDigitsString(date.getSeconds());

    const stringTime = `${hours}:${minutes}:${seconds}`;

    return (
        <div>
            {stringTime}
        </div>
    );
};

export default Clock;