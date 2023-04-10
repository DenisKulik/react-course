import styles from './Switch.module.scss';

type SwitchType = {
    status: boolean
}

export default function Switch({ status }: SwitchType) {
    return (
        <div className={ `${ styles.Switch }` }>
            <button className={ `${ styles.btn } ${ status && styles.on }` }>
                On
            </button>
            <button className={ `${ styles.btn } ${ !status && styles.off }` }>
                Off
            </button>
            <div
                className={ `${ styles.switchStatus } ${ status ? styles.on :
                                                         styles.off }` }></div>
        </div>
    );
}