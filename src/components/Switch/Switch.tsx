import styles from './Switch.module.scss';

type SwitchPropsType = {
    status: boolean
    setStatus: (status: boolean) => void
}

export default function Switch({ status, setStatus }: SwitchPropsType) {
    const switchOn = () => setStatus(true);
    const switchOff = () => setStatus(false);

    return (
        <div className={`${styles.switch}`}>
            <button onClick={switchOn}
                    className={`${styles.btn} ${status ? styles.on : ''}`}>
                On
            </button>
            <button onClick={switchOff}
                    className={`${styles.btn} ${!status ? styles.off : ''}`}>
                Off
            </button>
            <div className={`${styles.switchStatus} ${
                status ? styles.on : styles.off}`}></div>
        </div>
    );
}