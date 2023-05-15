import React, { useMemo, useState } from 'react';

export default {
    title: 'Components/UseMemo'
};

export const DifficultCounting = () => {
    const [ a, setA ] = useState<number>(5);
    const [ b, setB ] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000000) {
                fake++;
            }
            tempA *= i;
        }

        return tempA;
    }, [ a ]);

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <>
            <input value={a}
                   onChange={(e) => setA(Number(e.currentTarget.value))}
            />
            <input value={b}
                   onChange={(e) => setB(Number(e.currentTarget.value))}
            />
            <hr />
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    );
};

const Counter = (props: { count: number }) => <div>{props.count}</div>;
const UsersSecret = (props: { users: string[] }) => <div>{props.users.map(
    (u, i) => <div key={i}>{u}</div>)}</div>;
const Users = React.memo(UsersSecret);

export const HelpsReactMemo = () => {
    const [ count, setCount ] = useState(0);
    const [ users, setUsers ] = useState(
        [ 'Anna', 'Denis', 'Alex', 'Sofia' ]);

    const newArray = useMemo(
        () => users.filter(u => u.toLowerCase().indexOf('a') !== -1),
        [ users ]);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setUsers([ ...users, 'Adam' ])}>
                add user
            </button>
            <Counter count={count} />
            <Users users={newArray} />
        </>
    );
};