import React, {useEffect, useState} from "react";
import "./styles.css";

export default function HookSetEffectExample() {
    const [names, setNames] = useState([]);

    useEffect(() => void
        fetch("https://uinames.com/api/?amount=25&region=nigeria")
            .then(response => response.json())
            .then(data => setNames(data)), []);

    return <ul>
        {names.map(({name, surname}, key) =>
            <li {...{key}}>{name} {surname}</li>
        )}
    </ul>;
}
