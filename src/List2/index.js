import React from 'react';

export default ({items}) => <ul>
    {items.map(v => <li>{v}</li>)}
</ul>;
