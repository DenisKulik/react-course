import { useEffect, useState } from 'react';
import styles from './Clock.module.scss';
import { DigitalClockView } from './DigitalClockView/DigitalClockView';
import { AnalogClockView } from './AnalogClockView/AnalogClockView';

type ClockPropsType = {
    mode: 'digital' | 'analog'
}

const Clock = ({ mode }: ClockPropsType) => {
    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.clock}>
            {
                mode === 'digital' ?
                <DigitalClockView date={date} /> :
                <AnalogClockView date={date} />
            }
        </div>
    );
};

export type ClockType = {
    date: Date
}

export default Clock;