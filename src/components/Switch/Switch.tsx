type SwitchType = {
    status: boolean
}

export default function Switch({ status }: SwitchType) {
    return (
        <div className="Switch">
            <button className={ `onBtn ${ status && 'on' }` }>On</button>
            <button className={ `offBtn ${ !status && 'off' }` }>Off</button>
            <div className={ `switchStatus ${ status ? 'on' : 'off' }` }></div>
        </div>
    );
}