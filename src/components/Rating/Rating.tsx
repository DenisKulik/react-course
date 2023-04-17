import { useState } from 'react';

export default function Rating() {
    const [ value, setValue ] = useState(0);

    return (
        <div>
            <Star selected={ value > 0 } value={ 1 } setValue={ setValue } />
            <Star selected={ value > 1 } value={ 2 } setValue={ setValue } />
            <Star selected={ value > 2 } value={ 3 } setValue={ setValue } />
            <Star selected={ value > 3 } value={ 4 } setValue={ setValue } />
            <Star selected={ value > 4 } value={ 5 } setValue={ setValue } />
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star({ selected, value, setValue }: StarPropsType) {
    return (
        <span onClick={ () => setValue(value) }>
            { selected ? <b>star </b> : 'star ' }
        </span>
    );
}