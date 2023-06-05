import { useEffect, useState } from 'react';
import styles from './Clock.module.scss';

type ClockPropsType = {
    mode: 'digital' | 'analog'
}

const Clock = ({ mode }: ClockPropsType) => {
    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, []);

    const getTwoDigitsString = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hoursString = getTwoDigitsString(hours);
    const minutesString = getTwoDigitsString(minutes);
    const secondsString = getTwoDigitsString(seconds);

    const hourAngle = ((hours % 12) + minutes / 60) * 30;
    const minAngle = (minutes + seconds / 60) * 6;
    const secAngle = seconds * 6;

    const stringTime = `${hoursString}:${minutesString}:${secondsString}`;

    return (
        <div>
            {
                mode === 'digital' ?
                <div>{stringTime}</div> :
                <div className={styles.analogClock}>
                    <div className={`${styles.hand} ${styles.hour}`}
                         style={{ transform: `rotateZ(${hourAngle}deg)` }}
                    />
                    <div className={`${styles.hand} ${styles.minute}`}
                         style={{ transform: `rotateZ(${minAngle}deg)` }}
                    />
                    <div className={`${styles.hand} ${styles.second}`}
                         style={{ transform: `rotateZ(${secAngle}deg)` }}
                    />
                </div>
            }

        </div>
    );
};

export default Clock;