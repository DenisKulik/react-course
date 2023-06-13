import { ClockType } from '../Clock';

export const DigitalClockView = ({ date }: ClockType) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const getTwoDigitsString = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    const hoursString = getTwoDigitsString(hours);
    const minutesString = getTwoDigitsString(minutes);
    const secondsString = getTwoDigitsString(seconds);

    const stringTime = `${hoursString}:${minutesString}:${secondsString}`;

    return (
        <div>{stringTime}</div>
    );
};