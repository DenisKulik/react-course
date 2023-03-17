export default function Rating() {
    return (
        <div>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={false} />
        </div>
    )
}

function Star({selected}: { selected: boolean }) {
    return (
        <span>{selected ? <b>star </b> : 'star '}</span>
    )
}