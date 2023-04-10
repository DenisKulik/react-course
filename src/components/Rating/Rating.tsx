import { useState } from 'react';

export default function Rating() {
    const [ rating, setRating ] = useState(0);

    const addRating = (value: number) => setRating(value);

    return (
        <div>
            <Star selected={ rating > 0 } />
            <button onClick={ () => addRating(1) }>1</button>
            <Star selected={ rating > 1 } />
            <button onClick={ () => addRating(2) }>2</button>
            <Star selected={ rating > 2 } />
            <button onClick={ () => addRating(3) }>3</button>
            <Star selected={ rating > 3 } />
            <button onClick={ () => addRating(4) }>4</button>
            <Star selected={ rating > 4 } />
            <button onClick={ () => addRating(5) }>5</button>
        </div>
    );
}

function Star({ selected }: { selected: boolean }) {
    return (
        <span>{ selected ? <b>star </b> : 'star ' }</span>
    );
}