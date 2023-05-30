import React, { useState } from 'react';

export default {
    title: 'Example/ReactMemo'
};

const Counter = (props: { count: number }) => <div>{props.count}</div>;
const UsersSecret = (props: { users: string[] }) => <div>{props.users.map(
    (u, i) => <div key={i}>{u}</div>)}</div>;
const Users = React.memo(UsersSecret);

export const ExampleOne = () => {
    const [ count, setCount ] = useState(0);
    const [ users, setUsers ] = useState(
        [ 'Anna', 'Denis', 'Alex', 'Sofia' ]);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setUsers([ ...users, 'Dymich' ])}>
                add user
            </button>
            <Counter count={count} />
            <Users users={users} />
        </>
    );
};