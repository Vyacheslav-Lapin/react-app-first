import React, {useState} from 'react';

export default function EventsExample() {
    const [count, setCount] = useState(0);

    const onClick = e => {
        e.preventDefault();
        e.stopPropagation();
        setCount(count + 1);
    };

    return <a href="http://ya.ru/" {...{onClick}}>click {count}</a>;
}
