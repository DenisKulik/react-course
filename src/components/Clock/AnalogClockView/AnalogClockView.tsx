import styles from './AnalogClockView.module.scss';
import { ClockType } from '../Clock';

export const AnalogClockView = ({ date }: ClockType) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourAngle = ((hours % 12) + minutes / 60) * 30;
    const minAngle = (minutes + seconds / 60) * 6;
    const secAngle = seconds * 6;

    return (
        <div className={styles.analogClockView}>
            <div className={`${styles.hand} ${styles.hour}`}
                 style={{ transform: `rotate(${hourAngle}deg)` }}
            />
            <div className={`${styles.hand} ${styles.minute}`}
                 style={{ transform: `rotate(${minAngle}deg)` }}
            />
            <div className={`${styles.hand} ${styles.second}`}
                 style={{ transform: `rotate(${secAngle}deg)` }}
            />
        </div>
    );
};
