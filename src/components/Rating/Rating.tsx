type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export default function Rating({ value }: RatingType) {
    return (
        <div>
            <Star selected={ value > 0 } />
            <Star selected={ value > 1 } />
            <Star selected={ value > 2 } />
            <Star selected={ value > 3 } />
            <Star selected={ value > 4 } />
        </div>
    );
}

function Star({ selected }: { selected: boolean }) {
    return (
        <span>{ selected ? <b>star </b> : 'star ' }</span>
    );
}